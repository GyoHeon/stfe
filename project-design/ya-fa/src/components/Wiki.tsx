import {
  DocumentData,
  DocumentSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

export function Wiki() {
  const [document, setDocument] = useState<DocumentData | undefined>();
  const date = new Date((document?.date?.seconds || 0) * 1000);

  useEffect(() => {
    let data: DocumentSnapshot<DocumentData, DocumentData>;
    const querySnapshot = async () => {
      data = await getDoc(doc(db, "wiki", "rules"));

      setDocument(data.data());
    };
    querySnapshot();
  }, []);

  console.log(document);

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
