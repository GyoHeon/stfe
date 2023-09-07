import { UploadOutlined } from "@ant-design/icons";
import {
  ListResult,
  StorageReference,
  getDownloadURL,
  listAll,
  ref,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { useParam } from "../hooks/useParam";
import { storage } from "../utils/firebase";
import { UploadModal } from "./UploadModal";

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  listStyle: "none",
};

export function Gallery() {
  const item = useParam("item");
  const [haveToDownload, setHaveToDownload] = useState(true);
  const [storageRef, setStorageRef] = useState<StorageReference | undefined>();
  const [document, setDocument] = useState<ListResult | undefined>();
  const [urls, setUrls] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const querySnapshot = async () => {
      const refData = ref(storage, `/${item}`);
      setStorageRef(refData);

      const data = await listAll(refData);

      setDocument(data);
    };
    if (haveToDownload) {
      setHaveToDownload(false);
      querySnapshot();
    }
  }, [haveToDownload]);

  useEffect(() => {
    const querySnapshot = async () => {
      const refData = ref(storage, `/${item}`);
      setStorageRef(refData);

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>FastCampus 관련 갤러리</h2>
        <UploadOutlined
          style={{ fontSize: "40px" }}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </div>
      <ul style={gridStyle}>
        {urls.map((item) => (
          <li key={item} style={{ width: "300px", height: "300px" }}>
            <img src={item} width={300} height={300} />
          </li>
        ))}
      </ul>

      <UploadModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setHaveToDownload={setHaveToDownload}
        storageRef={storageRef}
      />
    </main>
  );
}
