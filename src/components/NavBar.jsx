import logo from "../assets/logo-puma.svg";
import lookUp from "../assets/glass.svg";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <header className="flex w-100 h-16 bg-[#181818] items-center justify-around">
      <img className="h-3/5 " src={logo} alt="" />
      <nav>
        <ul className="flex gap-5">
          <li className="text-slate-50">
            <a href="#">NUEVOS</a>
          </li>
          <li className="text-slate-50">
            <a href="#">Mujeres</a>
          </li>
          <li className="text-slate-50">
            <a href="#">Hombres</a>
          </li>
          <li className="text-slate-50">
            <a href="#">Niños</a>
          </li>
          <li className="text-slate-50">
            <a href="#">Deportes</a>
          </li>
          <li className="text-slate-50">
            <a href="#">Colecciones</a>
          </li>
          <li className="text-slate-50">
            <a href="#">SALE</a>
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
