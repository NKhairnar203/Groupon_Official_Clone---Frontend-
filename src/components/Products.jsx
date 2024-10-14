import React, { useEffect, useState } from "react";
import DealCard from "./DealCard";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  
  async function fetchData() {
    try {
      const response = await fetch(
        "https://groupon-official-clone-backend.onrender.com/api/deals",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  if (loading) return <Loading />;
  if (!products) return <p>Product not found.</p>;
  // console.log(products.Data)
  return (
    <div className="flex justify-center gap-5 flex-wrap">
      {products.map((ele) => (
        <DealCard
          id={ele._id}
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
