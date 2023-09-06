import { CheckSquareOutlined, EditOutlined } from "@ant-design/icons";
import { DocumentData, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useNavigate } from "react-router-dom";
import { useParam } from "../hooks/useParam";
import { db } from "../utils/firebase";

export function Wiki() {
  const item = useParam("item");
  const navigate = useNavigate();
  const [document, setDocument] = useState<DocumentData | undefined>();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState({ title: "", content: "" });
  const date = new Date((document?.date?.seconds || 0) * 1000);

  const handleEdit = () => {
    setIsEditing(true);
    navigate(`/Wiki?item=${item}&edit=true`);
    setText({ title: document?.title, content: document?.content });
  };
  const handleSave = async () => {
    const date = new Date();

    await setDoc(doc(db, "wiki", item || "rules"), {
      ...text,
      date,
    });
    navigate(`/Wiki?item=${item}`);
    setIsEditing(false);
  };

  useEffect(() => {
    const querySnapshot = async () => {
      const data = await getDoc(doc(db, "wiki", item || "rules"));

      setDocument(data.data());
    };
    querySnapshot();
  }, [item, isEditing]);

  return (
    <main style={{ height: "100%" }}>
      {isEditing ? (
        <>
          <div style={{ display: "flex" }}>
            <textarea
              style={{
                height: "1.5em",
                fontWeight: "bolder",
                fontSize: "1.5em",
                margin: "0.83em 0",
                borderBottom: "1px solid black",
              }}
              onChange={(e) => setText({ ...text, title: e.target.value })}
              value={text.title}
            />

            <CheckSquareOutlined
              style={{ fontSize: "40px" }}
              onClick={handleSave}
            />
          </div>

          <time style={{ fontWeight: 500, borderBottom: "1px solid black" }}>
            최종 수정일 : {document && date.toUTCString()}
          </time>

          <textarea
            style={{ height: "100%", margin: "1em 0" }}
            onChange={(e) => setText({ ...text, content: e.target.value })}
            value={text.content}
          />
        </>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{document ? document.title : "Loading..."}</h2>

            <EditOutlined style={{ fontSize: "40px" }} onClick={handleEdit} />
          </div>

          <time style={{ fontWeight: 500, borderBottom: "1px solid black" }}>
            최종 수정일 : {document && date.toUTCString()}
          </time>

          <ReactMarkdown
            children={document ? document?.content : "Loading..."}
          />
        </>
      )}
    </main>
  );
}
