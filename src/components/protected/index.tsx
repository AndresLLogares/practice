import { Outlet, Navigate } from "react-router-dom";
import { LocalStorageKeys, utilStorage } from "../../utils/utilsStorage";

export const ProtectedRoutes = () => {
  const { checkLocalStorage } = utilStorage();
  const usuario = checkLocalStorage(LocalStorageKeys.TOKEN);
  if (!usuario) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
