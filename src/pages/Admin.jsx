import React, { useState } from "react";
import { useAddProduct } from "@/integrations/supabase/index.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Admin = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const addProduct = useAddProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct.mutateAsync({ name, description, price, image_url: imageUrl });
      toast.success("Product added successfully!");
      setName("");
      setDescription("");
      setPrice("");
      setImageUrl("");
    } catch (error) {
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
            </div>
            <Button type="submit" variant="outline">Add Product</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;