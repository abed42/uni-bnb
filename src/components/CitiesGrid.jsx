import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";
import { Link } from "react-router-dom";

const CitiesGrid = () => {
    const {cities} = useContext(CitiesContext);

    return (
        <ul role="list" className=" grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8 ">
          {cities.slice(0,9).map((city,index) => (
            <Link to={'city/'+ city._id}>
            <li key={index} 
                className=" flex items-center justify-center h-64 bg-cover group aspect-h-7 aspect-w-10  rounded-lg"
                style={{ backgroundImage: `url("${city.image_url}")` }}>
                  <p className="flex items-center justify-center text-white text-3xl "> {city.name}</p>
            </li>
            </Link>
          ))}
        </ul>
      )
}
 
export default CitiesGrid;