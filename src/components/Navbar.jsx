import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="text-lg font-bold">Clothing Store</div>
      <div className="space-x-4">
        <Link to="/">
          <Button variant="default" className="text-black bg-white">Home</Button>
        </Link>
        <Link to="/products">
          <Button variant="default" className="text-black bg-white">Products</Button>
        </Link>
        <Link to="/cart">
          <Button variant="default" className="text-black bg-white">Cart</Button>
        </Link>
        <Link to="/admin">
          <Button variant="default" className="text-black bg-white">Admin</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;