import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);
  return (
    <>
      <ItemDetail item={product} />
    </>
  );
};
export default ItemDetailContainer;
