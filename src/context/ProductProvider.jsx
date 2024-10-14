import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      const response = await fetch("http://localhost:8080/api/deals");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  console.log(products);
  const addProduct = (product) => {
    setCart([...cart, product]);
    setQuantity(quantity + 1);
    setTotal(total + product.price);
  };

  const getProduct =async (productId) => {
    const response = await fetch("http://localhost:8080/api/deals");
      const data = await response.json();
    const product = data.find((product) => product.id === productId);
    console.log(product);
    return product;
  };

  return (
    <ProductContext.Provider value={{ getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useAuth must be used within an ProductProvider");
  }
  return context;
};
