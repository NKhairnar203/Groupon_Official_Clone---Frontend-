import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userID, setUserID] = useState(localStorage.getItem("userId"));
  const [getData, setGetData] = useState(JSON.parse(localStorage.getItem("user")))
  const [userData, setUserData] = useState();

  const StoreData = (data) =>{
    setUserData(data);
    return localStorage.setItem("user", JSON.stringify(data));
  }


  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken)
  };

  const storeUserData = (userid) => {
    setUserID(userid);
    return localStorage.setItem("userID", userid);
  };

  let isLoggedIn = !!token;
  console.log("isLogging", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    setUserID("")
    setUserData(null)
    setGetData(null)
    return localStorage.clear();
     
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        storeUserData,
        userID,
        token,
        StoreData,
        getData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
