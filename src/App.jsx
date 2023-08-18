import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Demo from "./components/Demo";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
