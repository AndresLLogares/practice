import { Routes } from "react-router-dom";
import { Suspense } from "react";
import { AuthProvider } from "./context/userContext";
import MainRoutes from "./routes/main";
import SecuredRoutes from "./routes/secured";

function App() {
  return (
    <>
      <AuthProvider>
        <Suspense fallback={<>...</>}>
          <MainRoutes />
          <SecuredRoutes />
        </Suspense>
      </AuthProvider>
    </>
  );
}

export default App;
