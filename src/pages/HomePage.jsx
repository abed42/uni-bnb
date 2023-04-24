import CitiesGrid from "../components/CitiesGrid";
import CitySearchBar from "../components/CitiesSearchBar";


const HomePage = () => {
    return (
    <div className="h-full">
        <h1>HomePage here</h1>
        <CitySearchBar />
        <CitiesGrid />
    </div> );
}

export default HomePage;