import { createContext,useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({children}) =>{

    const [userName,setUserName] = useState("");

    const changeName =(value)=>{
        setUserName(value);
    }

    return(
        <UserContext.Provider value ={{userName, changeName}}>
            {children}
        </UserContext.Provider>
    )
}