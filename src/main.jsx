import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CitiesContextProvider from "./context/CitiesContext.jsx";
import RootLayout from "./layouts/Root";
import CityDetails from "./pages/CityDetails";
import PropertiesContextProvider from "./context/PropertiesContext";
import HomeDetails from "./pages/HomeDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="city/:city_id" element={<CityDetails />} />
      <Route path="property/:property_id" element={<HomeDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CitiesContextProvider>
      <PropertiesContextProvider>
        <RouterProvider router={router} />
      </PropertiesContextProvider>
    </CitiesContextProvider>
  </React.StrictMode>
);
