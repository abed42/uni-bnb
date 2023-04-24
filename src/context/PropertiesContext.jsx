import { createContext, useEffect, useState } from "react";

export const PropertiesContext = createContext();


const PropertiesContextProvider = ({children}) => {
    const [properties, setProperties] = useState([]);
    const [singleProperty, setSingleProperty] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const fetchProperties = (cityId) =>{
        fetch('https://unilife-server.herokuapp.com/properties/city/'+ cityId)
        .then((response)=> response.json())
        .then((data) => setProperties(data.response))
    };
        
    const fetchSingleProperty = (property_id) =>{
        fetch('https://unilife-server.herokuapp.com/properties/'+ property_id)
        .then((response)=> response.json())
        .then((data) => setSingleProperty(data))
        .finally(() => setIsLoading(false))
    };

    return ( 
        <PropertiesContext.Provider value={{properties, fetchProperties, fetchSingleProperty, singleProperty, isLoading}}>
            {children}
        </PropertiesContext.Provider>
     );
}
 
export default PropertiesContextProvider;