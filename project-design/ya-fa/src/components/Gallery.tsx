import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Upload } from "antd";
import {
  ListResult,
  StorageReference,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { useParam } from "../hooks/useParam";
import { storage } from "../utils/firebase";

export function Gallery() {
  const item = useParam("item");
  const [haveToDownload, setHaveToDownload] = useState(true);
  const [storageRef, setStorageRef] = useState<StorageReference | undefined>();
  const [document, setDocument] = useState<ListResult | undefined>();
  const [file, setFile] = useState<Blob | undefined>(undefined);
  const [urls, setUrls] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    const uploadRef = ref(storageRef!, file?.name);

    if (file) {
      try {
        await uploadBytes(uploadRef!, file);
        setHaveToDownload(true);
        setFile(undefined);
      } catch (e) {
        alert(e);
      }
      setIsModalOpen(false);
    } else {
      alert("파일을 선택해주세요.");
    }
  };

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
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          listStyle: "none",
        }}
      >
        {urls.map((item) => (
          <li key={item} style={{ width: "300px", height: "300px" }}>
            <img src={item} width={300} height={300} />
          </li>
        ))}
      </ul>

      <Modal
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Close
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={async () => {
              await handleSubmit();
            }}
          >
            Submit
          </Button>,
        ]}
      >
        <Form style={{ margin: "40px 10px" }}>
          <Upload.Dragger
            name="files"
            multiple={false}
            beforeUpload={(info: Blob) => {
              setFile(info);

              return false;
            }}
            accept="image/*"
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              파일 업로드를 위해 클릭하거나 드래그하세요.
            </p>
            <p className="ant-upload-hint">귀찮아서 파일 하나만 업로드 가능</p>
          </Upload.Dragger>
        </Form>
      </Modal>
    </main>
  );
}
