import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  { id: 1, name: "T-Shirt", price: "$20" },
  { id: 2, name: "Jeans", price: "$40" },
  { id: 3, name: "Jacket", price: "$60" },
];

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Product Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/cart">
          <Button variant="outline">Go to Cart</Button>
        </Link>
      </div>
    </div>
  );
};

export default Products;