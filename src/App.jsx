import NavBar from "./components/NavBar.jsx";
import TopMessage from "./components/TopMessage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import NotFound from "./components/NotFound.jsx";
function App() {
  const saleMessage =
    "3 Cuotas sin Interés en compras superiores a $69.000 con VISA Y MASTERCARD";
  return (
    <BrowserRouter>
      <TopMessage text={saleMessage} />
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/:type/:id" element={<ItemListContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
