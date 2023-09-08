import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const ProtectedRoutes = lazy(() =>
  import("../components/protected").then(({ ProtectedRoutes }) => ({
    default: ProtectedRoutes,
  }))
);
const Secured = lazy(() =>
  import("../pages/secured").then(({ Secured }) => ({
    default: Secured,
  }))
);

const Another = lazy(() =>
  import("../pages/another").then(({ Another }) => ({
    default: Another,
  }))
);

const SecuredRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="secured" element={<Secured />} />
        <Route path="another" element={<Another />} />
      </Route>
    </Routes>
  );
};

export default SecuredRoutes;
