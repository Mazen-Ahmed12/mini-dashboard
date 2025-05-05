import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import { Dashboard } from "./pages/Dashboard";
import { Tenants } from "./pages/Tenants";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard/property" replace />,
  },
  {
    path: "/dashboard",
    element: <Layout/>,
    children: [
      { path: "property", element: <Dashboard /> },
      { path: "tenant", element: <Tenants /> },
    ],
  },
]);