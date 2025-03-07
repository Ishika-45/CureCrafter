import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

export const AppContext=createContext();

const AppContextProvider=(props)=>{
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [token, setToken] = useState(localStorage.getItem('token') || false);
    const value={
        doctors,
        backendUrl,
        token,setToken
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;