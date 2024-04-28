import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Pagina No Encontrada</h1>
      <h2 className="text-3xl text-center">Error 404</h2>
      <Link className="text-xl text-center mx-auto text-yellow-700" to="/">
        <p>Volver al Inicio</p>
      </Link>
    </div>
  );
};
export default NotFound;
