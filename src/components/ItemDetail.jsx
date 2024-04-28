import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="grid grid-cols-2 p-10 ">
      <img className="row-span-3" src={item.img} alt={item.nombre} />
      <h1 className="text-5xl">{item.nombre}</h1>
      <p className="text-xl">${item.precio}</p>
      <ItemCount stock={item.stock} />
    </div>
  );
};
export default ItemDetail;
