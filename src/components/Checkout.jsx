import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const Checkout = () => {
  const { total, cart, setCart, setUnseenProducts } = useContext(CartContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [succededPurchase, setSuccededPurchase] = useState("");
  const purchase = () => {
    const db = getFirestore();
    const colRef = collection(db, "compras");
    addDoc(colRef, {
      nombre: name,
      apellido: lastName,
      email: email,
      compra: cart,
      total: total,
    }).then((snapshot) => setSuccededPurchase(snapshot.id));
    setCart([]);
    setUnseenProducts(0);
  };
  if (succededPurchase) {
    return (
      <div className="flex flex-col items-center p-20">
        <p className="text-2xl">Gracias por tu compra!</p>
        <p className="text-md">id de compra: {succededPurchase}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center p-20 gap-5">
      <form className="flex flex-col w-[600px]">
        <label className="font-semibold">Nombre</label>
        <input
          className="font-semibold border-2 border-black rounded"
          type="text"
          onInput={(e) => {
            setName(e.target.value);
          }}
        />
        <label className="font-semibold">Apellido</label>
        <input
          className="font-semibold border-2 border-black rounded"
          type="text"
          onInput={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label className="font-semibold">Correo electronico</label>
        <input
          className="font-semibold border-2 border-black rounded"
          type="text"
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
      </form>
      <div className="flex items-center gap-20">
        <p className="text-xl font-semibold">$ {total} </p>
        <button
          className="border-2 border-black rounded text-xl p-2 px-6 hover:bg-slate-300 font-semibold"
          onClick={purchase}
        >
          PAGAR
        </button>
      </div>
    </div>
  );
};
export default Checkout;
