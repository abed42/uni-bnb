import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PropertiesContext } from "../context/PropertiesContext";
import PropertiesGrid from "../components/PropertiesGrid";

const CityDetails = () => {
    const {city_id} = useParams();

    const {fetchProperties,properties} = useContext(PropertiesContext);
    
    useEffect(()=> {
        fetchProperties(city_id);
    },[])
    console.log(properties)
    return ( <>
    <h1>CityDetails page here </h1>
        <PropertiesGrid />
    </> );
}
 
export default CityDetails;