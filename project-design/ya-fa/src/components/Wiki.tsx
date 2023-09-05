import { DocumentData, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useItem } from "../hooks/useItem";
import { db } from "../utils/firebase";

export function Wiki() {
  const item = useItem();
  const [document, setDocument] = useState<DocumentData | undefined>();
  const date = new Date((document?.date?.seconds || 0) * 1000);

  useEffect(() => {
    const querySnapshot = async () => {
      const data = await getDoc(doc(db, "wiki", item || "rules"));

      setDocument(data.data());
    };
    querySnapshot();
  }, [item]);

  return (
    <div>
      <h2>{document ? document.title : "Loading..."}</h2>
      <time style={{ fontWeight: 500 }}>
        최종 수정일 : {document && date.toUTCString()}
      </time>
      <p>{document ? document.content : "Loading..."}</p>
    </div>
  );
}
