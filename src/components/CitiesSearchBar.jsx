import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';
import { CitiesContext } from '../context/CitiesContext';

const CitySearchBar = () => {

    const {cities} = useContext(CitiesContext)
    const [selectedCity, setSelectedCity] = useState(null);
    const options = cities.map((city)=> {return {value:city._id, label:city.name}})

    const handler = (event) => {  
        setSelectedCity(event.value)
    }
    console.log(selectedCity)
    return ( 
    <div className='flex w-full justify-around'>
        <Select options={options} onChange={handler}/>
        <Link  to={selectedCity !== null ? 'city/'+ selectedCity : '#'}> find homes</Link>
      
    </div> );
}
 
export default CitySearchBar;