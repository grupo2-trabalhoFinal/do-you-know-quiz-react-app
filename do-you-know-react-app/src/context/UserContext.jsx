import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("Raquel amor da minha ");
  const [listCategory, setListCategory] = useState([]);

  const changeName = (value) => {
    setUserName(value);
  };

  return (
    <UserContext.Provider
      value={{ userName, changeName, setListCategory, listCategory }}
    >
      {children}
    </UserContext.Provider>
  );
};
