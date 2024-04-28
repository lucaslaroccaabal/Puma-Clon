import { useEffect, useState } from "react";
import arrayProductos from "./json/products.json";
import ItemList from "./ItemList";
import Banner from "./Banner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProductos);
      }, 2000);
    });
    promise.then((response) => {
      const filteredResponse = response.filter(
        (product) =>
          product[params.type] === params.id || product[params.type] === ""
      );
      setProducts(filteredResponse);
    });
  }, [params]);

  return (
    <>
      <Banner />
      <div className="mt-16 grid grid-cols-4 gap-x-3 gap-y-10 px-48">
        <ItemList products={products} />
      </div>
    </>
  );
};
export default ItemListContainer;
