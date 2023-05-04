import React from "react";
import ReactDOM from "react-dom/client";
import People from "./People.tsx";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonPage from "./PersonPage.tsx";

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
    path: "/persons/:personId",
    element: <PersonPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
