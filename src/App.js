import { Route, Routes } from "react-router";
import "./App.css";

import Home from "./pages/homePage/Home";
import Premium from "./pages/Premium";
import { useProductsContext } from "./context/productsContext/ProductsContext";
import ProductsPage from "./pages/productsPage/ProductsPage";
import Error from "./pages/errorPage/Error";
import ProductDetail from "./pages/productDetailPage/ProductDetail";

function App() {
  const { category, product } = useProductsContext();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Premium />} />
        <Route
          path={`/products/category/${category}`}
          element={<ProductsPage />}
        />
        <Route path={`/products/${product}`} element={<ProductDetail />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
