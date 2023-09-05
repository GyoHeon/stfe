import {
  ListResult,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { useParam } from "../hooks/useParam";
import { fireBaseApp } from "../utils/firebase";

export function Gallery() {
  const item = useParam("item");
  const [document, setDocument] = useState<ListResult | undefined>();
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const querySnapshot = async () => {
      const storage = getStorage(fireBaseApp);

      const refData = ref(storage, `/${item}`);

      const data = await listAll(refData);

      setDocument(data);
    };
    querySnapshot();
  }, [item]);

  useEffect(() => {
    const allPictures = async () => {
      const allItems = document?.items?.map(async (ref) => {
        return getDownloadURL(ref);
      });

      if (!allItems) return;

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
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          listStyle: "none",
        }}
      >
        {urls.map((item) => (
          <li key={item} style={{ width: "200px", height: "200px" }}>
            <img src={item} width={200} height={200} />
          </li>
        ))}
      </ul>
    </main>
  );
}
