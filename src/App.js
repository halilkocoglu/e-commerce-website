import { Route, Routes } from "react-router";
import "./App.css";

import Home from "./pages/homePage/Home";
import Premium from "./pages/Premium";
import { useProductsContext } from "./context/productsContext/ProductsContext";
import ProductsPage from "./pages/productsPage/ProductsPage";

function App() {
  const { category } = useProductsContext();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Premium />} />
        <Route
          path={`/products/category/${category}`}
          element={<ProductsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
