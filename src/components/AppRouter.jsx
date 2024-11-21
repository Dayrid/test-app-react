import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/router";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";
const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          exact={route.exact}
          key={route.path}
        />
      ))}
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
