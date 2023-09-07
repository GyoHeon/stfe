import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Upload } from "antd";
import { StorageReference, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

interface UploadModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setHaveToDownload: (value: boolean) => void;
  storageRef: StorageReference | undefined;
}

export function UploadModal({
  isModalOpen,
  setIsModalOpen,
  setHaveToDownload,
  storageRef,
}: UploadModalProps) {
  const [file, setFile] = useState<Blob | undefined>(undefined);

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

  return (
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
  );
}
