import { useEffect, useState } from "react";
import productsInfo from "./json/products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const itemId = id;
  useEffect(() => {
    setTimeout(() => {
      setProduct(productsInfo[itemId - 1]);
    }, 2000);
  }, []);
  return (
    <>
      <ItemDetail item={product} />
    </>
  );
};
export default ItemDetailContainer;
