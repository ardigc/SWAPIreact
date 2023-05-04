import React from "react";
import ReactDOM from "react-dom/client";
import People from "./People/People.tsx";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonPage from "./People/PersonPage.tsx";
import StarShips from "./Ships/StarShips.tsx";
import ShipPage from "./Ships/ShipPage.tsx";

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
    path: "/people/:personId",
    element: <PersonPage />,
  },
  {
    path: "/starships/:personId",
    element: <ShipPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
