import logo from "../assets/logo-puma.svg";
import lookUp from "../assets/glass.svg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="flex w-100 h-16 bg-[#181818] items-center justify-around">
      <Link to={"/"}>
        <img className="h-10 " src={logo} alt="" />
      </Link>
      <nav>
        <ul className="flex gap-5">
          <li className="text-slate-50">
            <Link to={"/"}> NUEVOS </Link>
          </li>
          <li className="text-slate-50">
            <Link to={"/gender/mujer"}>Mujeres</Link>
          </li>
          <li className="text-slate-50">
            <Link to={"/gender/hombre"}>Hombres</Link>
          </li>
          <li className="text-slate-50">
            <Link to={"/category/shorts"}>Shorts</Link>
          </li>
          <li className="text-slate-50">
            <Link to={"/category/zapatillas"}>Zapatillas</Link>
          </li>
          <li className="text-slate-50">
            <Link to={"/category/botines"}>Botines</Link>
          </li>
          <li className="text-slate-50">
            <Link to={"/"}>SALE</Link>
          </li>
        </ul>
      </nav>
      <button className="p-2 border border-zinc-700 rounded w-48 h-10">
        <img className="invert" src={lookUp} alt="" />
      </button>
      <p className="text-white">Seguí tu Envío</p>
      <CartWidget />
    </header>
  );
};
export default NavBar;
