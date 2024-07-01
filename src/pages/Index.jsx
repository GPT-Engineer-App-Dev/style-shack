import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Our Clothing Store</h1>
      <p className="text-lg">Find the best clothes for every occasion.</p>
      <div className="space-x-4">
        <Link to="/products">
          <Button variant="outline">Shop Now</Button>
        </Link>
        <Link to="/cart">
          <Button variant="outline">View Cart</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;