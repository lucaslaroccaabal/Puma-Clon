import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to={`/item/${product.id}`} className="flex flex-col justify-between">
      <img className="" src={product.img} alt={product.nombre} />
      <p className="font-thin px-1">{product.nombre}</p>
      <p className="font-semibold px-1">$ {product.precio}</p>
    </Link>
  );
};
export default Item;
