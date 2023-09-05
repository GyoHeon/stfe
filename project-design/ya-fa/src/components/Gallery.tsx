import {
  ListResult,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fireBaseApp } from "../utils/firebase";

export function Gallery() {
  const [id] = useSearchParams();
  const [document, setDocument] = useState<ListResult | undefined>();
  const [urls, setUrls] = useState<string[][]>([]);

  const item = id.get("item") as string;

  useEffect(() => {
    const querySnapshot = async () => {
      const storage = getStorage(fireBaseApp);

      const refData = ref(storage, `/${item}`);

      const data = await listAll(refData);

      console.log(data.items);

      setDocument(data);
    };
    querySnapshot();
  }, [item]);

  useEffect(() => {
    const allPictures = async () => {
      const allItems = document?.items?.map(async (ref) => {
        return getDownloadURL(ref);
      });

      const allUrls = await Promise.all(allItems);

      setUrls(allUrls);
    };

    allPictures();
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
        {urls.map((item) => (
          <li key={item} style={{ width: "100px", height: "100px" }}>
            <img src={item} width={100} height={100} />
          </li>
        ))}
      </ul>
    </main>
  );
}
