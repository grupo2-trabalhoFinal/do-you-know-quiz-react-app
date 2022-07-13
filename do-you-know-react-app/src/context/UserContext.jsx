import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [listCategory, setListCategory] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});

  const [userName, setUserName] = useState("");
  const changeName = (value) => {
    setUserName(value);
  };

  const changeQuestion = (item) => {
    setSingleQuestion(item);
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        changeName,
        setListCategory,
        listCategory,
        singleQuestion,
        setSingleQuestion,
        changeQuestion,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
