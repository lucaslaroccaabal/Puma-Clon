import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartCount from "./CartCount";

const Cart = () => {
  const {
    cart,
    total,
    removeItem,
    clear,
    addItem,
    totalPrice,
    setUnseenProducts,
  } = useContext(CartContext);
  console.log(cart);
  if (cart.length <= 0) {
    return (
      <div className="w-screen max-w-full flex flex-col items-center">
        <h3 className="text-center text-3xl p-10">
          No hay productos en el carrito
        </h3>
        <Link
          className="border-2 rounded border-black w-fit p-2 hover:bg-slate-300 m-5"
          to={"/"}
        >
          Volver al Inicio
        </Link>
      </div>
    );
  }
  useEffect(() => {
    totalPrice();
  }, []);
  return (
    <div className="w-screen max-w-full flex flex-col items-center my-10">
      <h3 className="text-center text-3xl">Carrito</h3>
      <button
        onClick={() => {
          clear();
          setUnseenProducts();
        }}
        className="border-2 rounded border-black w-fit p-2 hover:bg-slate-300 m-5"
      >
        Vaciar Carrito
      </button>
      <ul className="flex flex-col gap-2 m-10">
        {cart.map((item) => (
          <li
            className="flex flex-row gap-2 items-center w-[600px] justify-start"
            key={item.idx}
          >
            <img className="h-20" src={item.img} alt={item.nombre} />
            <div className="flex flex-col">
              <span>{item.nombre}</span>
              <span>${item.precio}</span>
            </div>
            <CartCount item={item} />
            <img
              className="h-6 align-self-end invert-[20%] hover:invert-0"
              src={"https://cdn-icons-png.freepik.com/512/542/542724.png"}
              alt="trash can"
              onClick={() => {
                removeItem(item.idx);
              }}
            />
          </li>
        ))}
      </ul>
      <span className="text-xl">Total: ${total}</span>
      <Link
        className="text-slate-100 bg-black rounded p-2 mt-1"
        to={"/checkout"}
      >
        CHECKOUT
      </Link>
    </div>
  );
};
export default Cart;
