import React, { useEffect, useState } from "react";
import DealCard from "./DealCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  async function fetchData() {
    try {
      // Add new product to backend
      const response = await fetch("http://localhost:8080/api/deals", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProducts(data);
        console.log(products);
      } else {
        console.error("Failed to product", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(products.Data)
  return (
    <div className="flex gap-5 flex-wrap">
      {products.map((ele) => (
        <DealCard
          key={ele._id}
          name={ele.name}
          image={ele.image}
          address={ele.address}
          price={ele.price}
        />
      ))}
    </div>
  );
};

export default Products;
