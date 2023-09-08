import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Login = lazy(() =>
  import("../pages/login").then(({ Login }) => ({
    default: Login,
  }))
);
const Main = lazy(() =>
  import("../pages/main").then(({ Main }) => ({
    default: Main,
  }))
);

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
