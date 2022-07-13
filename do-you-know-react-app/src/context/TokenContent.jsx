import { createContext,useState } from "react";

export const TokenContext = createContext({});

export const TokenProvider =({children})=>{
    
    const[token,setToken] = useState("");

    const changeToken = (value) =>{
        setToken(value);
        localStorage.setItem("@quizToken", JSON.stringify(value));
        console.log(value);
    }


    return(
        <TokenContext.Provider
        value={{token,changeToken}}>
            {children}
        </TokenContext.Provider>
    )
}