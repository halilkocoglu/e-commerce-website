import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Premium from "./pages/Premium";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </div>
  );
}

export default App;
