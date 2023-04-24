import { createContext, useEffect, useState } from "react";

export const CitiesContext = createContext();


const CitiesContextProvider = ({children}) => {
    const [cities, setCities] = useState([]);

    useEffect(()=>{
        fetch('https://unilife-server.herokuapp.com/cities/?limit=20')
        .then((response)=> response.json())
        .then((data) => setCities(data.response))
    },[]);

    return ( 
        <CitiesContext.Provider value={{cities}}>
            {children}
        </CitiesContext.Provider>
     );
}
 
export default CitiesContextProvider;