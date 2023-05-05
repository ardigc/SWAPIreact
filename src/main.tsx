import React from "react";
import ReactDOM from "react-dom/client";
import People from "./People/People.tsx";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonPage from "./People/PersonPage.tsx";
import StarShips from "./Ships/StarShips.tsx";
import Planets from "./Planets/Planets.tsx";
import ShipPage from "./Ships/ShipPage.tsx";
import PlanetPage from "./Planets/PlanetPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/people",
    element: <People />,
  },
  {
    path: "/starships",
    element: <StarShips />,
  },
  {
    path: "/planets",
    element: <Planets />,
  },
  {
    path: "/people/:personId",
    element: <PersonPage />,
  },
  {
    path: "/starships/:personId",
    element: <ShipPage />,
  },
  {
    path: "/planets/:personId",
    element: <PlanetPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
