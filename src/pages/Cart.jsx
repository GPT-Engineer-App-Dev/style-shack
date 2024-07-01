import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const cartItems = [
  { id: 1, name: "T-Shirt", price: "$20", quantity: 2 },
  { id: 2, name: "Jeans", price: "$40", quantity: 1 },
];

const Cart = () => {
  const total = cartItems.reduce((acc, item) => acc + item.price.slice(1) * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Remove</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Total: ${total}</h2>
        <Button variant="outline" className="mt-2">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;