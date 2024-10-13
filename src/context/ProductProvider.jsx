import { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')
  const [loading, setLoading] = useState(false)



  
  return (
    <ProductContext.Provider
      value={{
        
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useAuth must be used within an ProductProvider");
  }
  return context;
};
