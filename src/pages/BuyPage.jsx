import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const BuyPage = () => {
  const { dealId } = useParams();
  const [product, setProduct] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    // Fetch product details from backend
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/deals/${dealId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [dealId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePurchase = () => {
    console.log("Purchasing product:", product);
    console.log("Card details:", cardDetails);
  };

  if (!product) return <Loading/>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Purchase {product.name}</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Details */}
        <div className="lg:w-1/2 border rounded-lg p-4 shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
          <p className="text-lg text-gray-700 mb-2">{product.description}</p>
          <p className="text-xl font-bold mb-4">${product.price}</p>
        </div>

        {/* Card Details */}
        <div className="lg:w-1/2 border rounded-lg p-4 shadow">
          <h3 className="text-2xl font-semibold mb-4">Enter Card Details</h3>

          <div className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Card Holder Name</label>
            <input
              type="text"
              name="cardName"
              value={cardDetails.cardName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <button
            onClick={handlePurchase}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
