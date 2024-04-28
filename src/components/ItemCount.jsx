import { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
  const [contador, setContador] = useState(0);
  const [itemStock, setItemStock] = useState(stock);
  const increment = () => {
    if (contador < itemStock) setContador(contador + 1);
  };
  const decrement = () => {
    if (contador > 0) setContador(contador - 1);
  };
  const onAdd = () => {
    if (contador > 0) {
      setItemStock(itemStock - contador);
      setContador(0);
      console.log("Agregaste " + contador + " productos");
    }
  };
  useEffect(() => {
    setItemStock(stock);
    setContador(0);
  }, [stock]);

  return (
    <div className="flex py-8 gap-5 h-28">
      <div className="flex items-center px-2 gap-8 rounded border border-2 border-slate-300 w-fit">
        <button onClick={decrement} className="w-5 text-3xl text-yellow-700">
          -
        </button>
        <span className="text-xl w-20 text-center">{contador}</span>
        <button onClick={increment} className="w-5 text-3xl text-yellow-700">
          +
        </button>
      </div>
      <button
        onClick={onAdd}
        className="text-xl text-yellow-700 rounded p-2 border border-2 border-slate-300 w-fit "
      >
        Agregar Al Carrito
      </button>
      <h2></h2>
    </div>
  );
};
export default ItemCount;
