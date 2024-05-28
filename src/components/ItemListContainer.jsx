import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import PumaSale from "./PumaSale";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  //firestore
  useEffect(() => {
    const db = getFirestore();
    const colRef = collection(db, "items");
    getDocs(colRef).then((snapshot) => {
      const array = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const filteredArray = array.filter(
        (product) =>
          product[params.type] === params.id || product[params.type] === ""
      );
      setProducts(filteredArray);
    });
  }, [params]);
  return (
    <>
      <PumaSale />
      <Banner />
      <div className="mt-16 grid grid-cols-4 gap-x-3 gap-y-10 px-48">
        <ItemList products={products} />
      </div>
    </>
  );
};
export default ItemListContainer;
