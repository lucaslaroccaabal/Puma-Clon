import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <Item key={product.idx} product={product} />;
      })}
    </>
  );
};
export default ItemList;
