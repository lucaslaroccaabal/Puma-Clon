import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";
import TopMessage from "./components/TopMessage.jsx";
function App() {
  const saleMessage =
    "3 Cuotas sin Interés en compras superiores a $69.000 con VISA Y MASTERCARD";
  return (
    <>
      <TopMessage text={saleMessage} />
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
