import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
    <>
        <h1>navbar</h1>
        <Outlet/>
        <h2>footer</h2>
    </> 
    );
}
 
export default RootLayout;