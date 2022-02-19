import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Routes = () => {
  const Home = lazy(() => import("./pages/Home"));
  const Login = lazy(() => import("./pages/Login"));
  const Register = lazy(() => import("./pages/Register"));
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const NotFound = lazy(() => import("./pages/NotFound"));

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default Routes;
