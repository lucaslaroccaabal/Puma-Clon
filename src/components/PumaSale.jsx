import { Link } from "react-router-dom";

const PumaSale = () => {
  return (
    <div className="bg-red-600 w-screen max-w-full py-5">
      <Link to={"/"}>
        <p className="text-yellow-50 text-center text-3xl font-bold">
          PUMA SALE | COMING SOON
        </p>
        <p className="text-white text-center font-semibold">
          ¿Querés acceder a beneficios exclusivos?
        </p>
      </Link>
    </div>
  );
};
export default PumaSale;
