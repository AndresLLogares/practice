import axios from "axios";
import { LocalStorageKeys, utilStorage } from "../utils/utilsStorage";

export const GetService = () => {
  return axios.get("https://rickandmortyapi.com/api/character/2");
};

export const refreshToken = () => {
  const { checkLocalStorage } = utilStorage();
  const token = checkLocalStorage(LocalStorageKeys.TOKEN);

  return axios.post(
    "https://rickandmortyapi.com/api/refreshtoken",
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
