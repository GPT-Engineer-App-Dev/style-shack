import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;