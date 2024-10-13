import React, { useState } from "react";
import ProductForm from "../components/ProductForm";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleProductSubmit = async (formData) => {
    if (editingProduct) {
      // Update existing product locally (no backend update for simplicity)
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id
            ? { ...editingProduct, ...formData }
            : product
        )
      );
      setEditingProduct(null);
    } else {
      try {
        // Add new product to backend
        const response = await fetch("http://localhost:8080/api/deals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const newProduct = await response.json();
          setProducts([...products, newProduct]); // Add product to the local state list
        } else {
          console.error("Failed to create product", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {editingProduct ? "Edit Product" : "Add Product"}
      </h2>
      <ProductForm onSubmit={handleProductSubmit} product={editingProduct} />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Products List</h2>
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
