import { createContext, useState } from "react";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [unseenProducts, setUnseenProducts] = useState(0);
  const totalPrice = () => {
    let a = cart.reduce((v, item) => v + item.precio * item.quantity, 0);
    setTotal(a);
  };
  const addItem = (item, quantity) => {
    if (isInCart(item.idx)) {
      if (item.stock > item.quantity + quantity) {
        const itemFounded = cart.find((item) => item.idx === item.idx);
        itemFounded.quantity += quantity;
        setCart([...cart]);
      }
    } else {
      setUnseenProducts(unseenProducts + 1);
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };
  const subtractItem = (item, quantity) => {
    if (isInCart(item.idx)) {
      const itemFounded = cart.find((item) => item.idx === item.idx);
      item.quantity > 1
        ? (itemFounded.quantity -= quantity)
        : itemFounded.quantity;
      setCart([...cart]);
    } else {
    }
  };
  const removeItem = (id) => {
    setUnseenProducts(unseenProducts - 1);
    const newCart = cart.filter((item) => item.idx !== id);
    setCart([...newCart]);
  };
  const clear = () => {
    setCart([]);
  };
  const isInCart = (idx) => {
    return cart.some((item) => item.idx === idx);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        unseenProducts,
        addItem,
        subtractItem,
        removeItem,
        clear,
        totalPrice,
        setCart,
        setUnseenProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
