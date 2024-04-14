import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
const CartWidget = () => {
  return (
    <div className="flex h-2/5 gap-3 relative">
      <span className="absolute bg-red-600 w-4 h-4 rounded z-10 end-[30px] top-[-5px] text-xs text-slate-50 text-center">
        1
      </span>
      <img className="invert w-100" src={cart} alt="" />
      <img className="invert" src={profile} alt="" />
    </div>
  );
};
export default CartWidget;
