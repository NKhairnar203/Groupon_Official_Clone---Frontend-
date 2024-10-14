import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Assuming the product ID is passed as a URL parameter
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const response = await fetch(
          `https://groupon-official-clone-backend.onrender.com/api/deals/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct(id);
  }, [id]);

 

  if (loading) return <Loading/>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className=" md:flex-row p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-wrap">
        {" "}
        <div className="md:w-1/3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>

          <p className="text-2xl font-bold text-red-500 my-2">
            ${product.price}
          </p>
          <p className="text-gray-600 mt-2">
            Stock: {product.stock > 0 ? product.stock : "Out of Stock"}
          </p>
          <Link to={`/buy-detail/${product._id}`}>
            <button
             
              className="mt-4 bg-green-700  text-white px-6 w-48 py-2 rounded-3xl hover:bg-green-800 transition duration-300"
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? "Out of Stock" : "Buy"}
            </button>
          </Link>
        </div>
      </div>
      <div className="my-20">
        {" "}
        <p className="text-gray-600 mt-2 mb-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
