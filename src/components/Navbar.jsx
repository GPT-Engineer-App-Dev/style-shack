import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="text-lg font-bold">Clothing Store</div>
      <div className="space-x-4">
        <Link to="/">
          <Button variant="outline" className="text-white">Home</Button>
        </Link>
        <Link to="/products">
          <Button variant="outline" className="text-white">Products</Button>
        </Link>
        <Link to="/cart">
          <Button variant="outline" className="text-white">Cart</Button>
        </Link>
        <Link to="/admin">
          <Button variant="outline" className="text-white">Admin</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;