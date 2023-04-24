import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PropertiesContext } from "../context/PropertiesContext";

const HomeDetails = () => {
  const { property_id } = useParams();
  const { fetchSingleProperty, singleProperty, isLoading } =
    useContext(PropertiesContext);

  useEffect(() => {
    fetchSingleProperty(property_id);
  }, []);

  return (
    <div>
      <h1>Home Details page here</h1>
      {isLoading ? (
        <h1>cargando...</h1>
      ) : (
        <div className="flex">
          <div>
            <img src={singleProperty.images[0]} />
            <div className="flex">
              {singleProperty.images.slice(1, 4).map((image,index) => (
                <img className="w-32" src={image} key={index}/>
              ))}
            </div>
          </div>
          <p className="flex items-center justify-center  ">
            {" "}
            {singleProperty.address.street},{singleProperty.address.city},
            {singleProperty.address.postcode}
          </p>
        </div>
      )}
    </div>
  );
};

export default HomeDetails;
