import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { WrapperProps } from "../components/layout";
import axios from "axios";
import { LocalStorageKeys, utilStorage } from "../utils/utilsStorage";
import { useNavigate } from "react-router-dom";

export type AuthContextTypes = {
  user: string | null;
  authTokens: string | null;
  loginUserFunction: (
    event: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string
  ) => void;
  logoutUser: () => void;
  fakeLoginFunction: (
    event: React.FormEvent<HTMLFormElement>,
    username: string | undefined,
    password: string | undefined
  ) => void;
};

const AuthContext = createContext<AuthContextTypes | null>(null);

export default AuthContext;

export const AuthProvider = ({ children }: WrapperProps) => {
  const { clearLocalStorage } = utilStorage();
  const [authTokens, setAuthTokens] = useState<string | null>(() =>
    localStorage.getItem(LocalStorageKeys.TOKEN)
  );
  const [user, setUser] = useState<string | null>(() =>
    localStorage.getItem(LocalStorageKeys.TOKEN)
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const loginUserFunction = async (
    event: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string
  ) => {
    const response = await axios.post("http://127.0.0.1:8000/api/token/", {
      username: username,
      password: password,
    });
    const data = await response.data;

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data));
      localStorage.setItem(LocalStorageKeys.TOKEN, JSON.stringify(data));
    } else {
      alert("Something went wrong!");
    }
  };

  const fakeLoginFunction = async (
    event: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string
  ) => {
    localStorage.setItem(LocalStorageKeys.TOKEN, JSON.stringify(password));
    setAuthTokens(password);
    setUser(JSON.stringify(username));
    navigate("/secured");
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    clearLocalStorage();
  };

  const updateToken = async () => {
    /*     const response = await axios.post(
      "http://127.0.0.1:8000/api/token/refresh/",
      {
        token: JSON.stringify({ refresh: authTokens }),
      }
    ); */
    const response = {
      status: 200,
      data: { access: "666" },
      access: "555",
    };
    const data = await response.data;

    if (response.status === 200) {
      setAuthTokens(JSON.stringify(data));
      setUser(data.access);
      localStorage.setItem(LocalStorageKeys.TOKEN, JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  const contextData = {
    user: user,
    authTokens: authTokens,
    loginUserFunction: loginUserFunction,
    logoutUser: logoutUser,
    fakeLoginFunction: fakeLoginFunction,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    const fourMinutes = 1000 * 60 * 4;

    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
