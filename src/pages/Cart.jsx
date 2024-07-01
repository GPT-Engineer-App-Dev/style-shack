import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useShoppingCart, useDeleteShoppingCartItem, useUpdateShoppingCartItem } from "@/integrations/supabase/index.js";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";

const Cart = () => {
  const { data: cartItems, error, isLoading } = useShoppingCart();
  const deleteItem = useDeleteShoppingCartItem();
  const updateItem = useUpdateShoppingCartItem();

  const handleRemove = async (id) => {
    try {
      await deleteItem.mutateAsync(id);
      toast.success("Item removed successfully!");
    } catch (error) {
      console.error("Failed to remove item:", error);
      toast.error("Failed to remove item.");
    }
  };

  const handleUpdateQuantity = async (id, quantity) => {
    try {
      await updateItem.mutateAsync({ id, quantity });
      toast.success("Quantity updated successfully!");
    } catch (error) {
      console.error("Failed to update quantity:", error);
      toast.error("Failed to update quantity.");
    }
  };

  if (isLoading) {
    return (
      <div className="p-4">
        <Skeleton className="h-8 w-1/2 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-8 w-1/2" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <Alert>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      </div>
    );
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
              <p>Price: ${item.price}</p>
              <p>Quantity: 
                <input 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => handleUpdateQuantity(item.id, e.target.value)} 
                  className="ml-2 border rounded p-1 w-16"
                />
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="text-black bg-white" onClick={() => handleRemove(item.id)}>Remove</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Total: ${total}</h2>
        <Button variant="default" className="text-black bg-white mt-2">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;