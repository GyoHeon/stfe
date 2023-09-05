import {
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { fireBaseApp } from "../utils/firebase";

export function Gallery() {
  const [document, setDocument] = useState<FirebaseStorage | undefined>();
  const [urls, setUrls] = useState<string[][]>([]);

  useEffect(() => {
    const querySnapshot = async () => {
      const storage = getStorage(fireBaseApp);

      const refData = ref(storage, "");

      const data = await listAll(refData);

      setDocument(data);
    };
    querySnapshot();
  }, []);

  useEffect(() => {
    const AllPictures = async () => {
      const AllItems = await document?.prefixes?.map(async (prefix) => {
        const list = await listAll(prefix);

        const pictures = list?.items?.map(async (item) => {
          return getDownloadURL(item);
        });

        return await Promise.all(pictures);
      });

      const allUrls = await Promise.all(AllItems);

      setUrls(allUrls);
    };

    AllPictures();
  }, [document]);

  return (
    <main>
      <h2>FastCampus는 하마, 불독, 판다를 숭배합니다.</h2>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          listStyle: "none",
        }}
      >
        {urls.map((url) =>
          url.map((item) => (
            <li key={item} style={{ width: "100px", height: "100px" }}>
              <img src={item} width={100} height={100} />
            </li>
          ))
        )}
      </ul>
    </main>
  );
}
