import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
import { useContext } from "react";
import { CartContext } from "./CartContext";
const CartWidget = () => {
  const { unseenProducts } = useContext(CartContext);
  return (
    <div className="flex h-2/5 gap-3 relative w-16">
      <Link className="w-4/5 inline-block" to={"/cart"}>
        {unseenProducts ? (
          <span className="absolute bg-red-600 w-4 h-4 rounded z-10 end-[30px] top-[-5px] text-xs text-slate-50 text-center">
            {unseenProducts}
          </span>
        ) : (
          ""
        )}
        <img className="invert w-4/5" src={cart} alt="" />
      </Link>
      <img className="invert w-4/5" src={profile} alt="" />
    </div>
  );
};
export default CartWidget;
