import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartCount = ({ item }) => {
  const { addItem, subtractItem, totalPrice } = useContext(CartContext);
  return (
    <div className="w-20 flex items-center justify-around border-2 border-black rounded ">
      <button
        className="text-md"
        onClick={() => {
          subtractItem(item, 1);
          totalPrice();
        }}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        className="text-md"
        onClick={() => {
          addItem(item, 1);
          totalPrice();
        }}
      >
        +
      </button>
    </div>
  );
};
export default CartCount;
