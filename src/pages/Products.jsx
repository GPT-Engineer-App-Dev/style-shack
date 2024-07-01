import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useProducts } from "@/integrations/supabase/index.js";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Products = () => {
  const { data: products, error, isLoading } = useProducts();

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
              <AspectRatio ratio={4 / 3}>
                <img src={product.image_url} alt={product.name} className="object-cover w-full h-full rounded-md" />
              </AspectRatio>
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