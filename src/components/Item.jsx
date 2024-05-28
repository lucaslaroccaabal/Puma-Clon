import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link
      to={`/item/${product.id}`}
      className="flex flex-col gap-3 items-center"
    >
      <img className="mb-1" src={product.img} alt={product.nombre} />
      <p className="font-thin text-center px-1 h-10">{product.nombre}</p>
      <p className="font-semibold text-center">$ {product.precio}</p>
      {product.envioGratis ? (
        <p className="bg-green-500 rounded w-fit px-1 text-center font-semibold">
          ENVÍO GRATIS
        </p>
      ) : (
        <></>
      )}
    </Link>
  );
};
export default Item;
