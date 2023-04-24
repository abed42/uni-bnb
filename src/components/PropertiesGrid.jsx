import { useContext } from "react";
import { PropertiesContext } from "../context/PropertiesContext";
import { FaBed } from 'react-icons/fa';
import { Link } from "react-router-dom";

const PropertiesGrid = () => {
 const {properties} = useContext(PropertiesContext);
//  {
//     "_id": "633d45d461f49f86a21caa1e",
//     "key_features": [
//         "Cozy Fireplace",
//         "Freshly Painted",
//         "Two-car garage",
//         "Lift & Secure Entrance",
//         "City Centre Location"
//     ],
//     "property_type": "Apartment",
//     "property_description": "We are proud to bring to the market this well presented home in Liverpool. This home is perfect for professionals or students for high quality, City Centre living. Recently remodeled and tastefully furnished in true Liverpool fashion, this awesome home boasts a unique charm, with many of the original features and woodwork from its over-a-century-year-old building still intact.",
//     "bedroom_count": 4,
//     "bathroom_count": 2,
//     "deposit": 400,
//     "rent": 600,
//     "availability": "Mid-October",
//     "address": {
//         "street": "Brook Street",
//         "city": "Liverpool",
//         "postcode": "LS5 1AE"
//     },
//     "images": [
//         "http://res.cloudinary.com/blackeagle4894/image/upload/v1617841080/rhem5vqt0fzyoit4wksx.jpg",
//         "http://res.cloudinary.com/blackeagle4894/image/upload/v1617841083/vhyhjyxpmlbjwjltdgx6.jpg",
//         "http://res.cloudinary.com/blackeagle4894/image/upload/v1617841087/gynanius5q6zlph4z6ih.jpg",
//         "http://res.cloudinary.com/blackeagle4894/image/upload/v1617841092/adufsselh6ljdk3vgesw.jpg"
//     ],
//     "furnished": "Unfurnished",
//     "bedroom_prices": {
//         "bedroom_one": 160,
//         "bedroom_two": 150,
//         "bedroom_three": 150,
//         "bedroom_four": 140
//     }
// }
 console.log(properties)
    return (
        <ul role="list" className=" grid grid-cols-3 gap-x-8 gap-y-16 ">
          {properties.map((property,index) => (
                // Link tag here
            <li key={index} 
                className=" flex flex-col items-center justify-center  rounded-3xl border ">
                    <img className="rounded-t-3xl" src={property.images[0]} alt={'photo of an '+ property.property_type} />
                    <div className="flex justify-between w-full py-4  bg-blue-600 text-white text-lg">
                        <span className="text-2xl"> {property.bedroom_prices.bedroom_one} </span>  
                      <div className="flex justify-betwee"> <FaBed className="mx-4"/>  <span > {property.bedroom_count} </span> </div>
                        <span> {property.bathroom_count} </span>  
                    </div>
                    <div>
                    <div className="flex justify-between w-full">

                            <span className="text-lg">{property.property_type}</span>
                            <span>{property.furnished}</span>
                        </div>
                 
                    <p className="flex items-center justify-center  "> {property.address.street},{property.address.city},{property.address.postcode}</p>
                    </div>
                        <Link to={'../property/'+ property._id}>
                        View Home</Link>
            </li>
          ))}
        </ul>
      )
}
 
export default PropertiesGrid;