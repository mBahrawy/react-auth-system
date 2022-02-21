import { lazy, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useRoutes, Navigate } from "react-router-dom";


const Routes = () => {

  const ctx = useContext(AuthContext);
  const { role, token } = ctx.auth;

  const Home = lazy(() => import("../pages/Home"));
  const Login = lazy(() => import("../pages/Login"));
  const Register = lazy(() => import("../pages/Register"));
  const DashboardAdmin = lazy(() => import("../pages/Dashboard/DashboardAdmin"));
  const DashboardBasic = lazy(() => import("../pages/Dashboard/DashboardBasic"));
  const NotFound = lazy(() => import("../pages/NotFound"));

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: ( !token ? <Login /> : <Navigate to="/" />),

    },
    {
      path: "/register",
      element: ( !token ? <Register /> : <Navigate to="/" />),
    },
    {
      path: "/dashboard",
      element: ( !token && <Navigate to="/login" />),
      children: [
        {
          path: "/dashboard/admin",
          element: role ==='admin' && <DashboardAdmin />
        }, 
        {
          path: "/dashboard/user",
          element: role ==='basic' && <DashboardBasic />
        }
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default Routes;
