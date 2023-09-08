import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import {
  ContainerSecuredComponent,
  TitleSecuredComponent,
} from "../../styles/secured";
import { SecuredEnum } from "../../enums/secured/index,";
import { AuthProvider } from "../../context/userContext";
import { ButtonMainComponent } from "../../styles/main";
import { useNavigate } from "react-router-dom";
import { MainEnum } from "../../enums/main";
import { utilStorage } from "../../utils/utilsStorage";
import { GetService } from "../../services/services";
import { RickEnum } from "../../enums/response";
import { ListOfItems } from "../list";

export const SecuredComponent = () => {
  const { clearLocalStorage } = utilStorage();
  const navigate = useNavigate();
  const [dataService, setDataService] = useState<RickEnum>();

  const fetchData = async () => {
    const { data } = await GetService();
    setDataService(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <ContainerSecuredComponent>
        <TitleSecuredComponent>{SecuredEnum.Secured}</TitleSecuredComponent>
        <ButtonMainComponent
          onClick={() => {
            clearLocalStorage();
            navigate("/");
          }}
        >
          {MainEnum.GoBack}
        </ButtonMainComponent>
        <ButtonMainComponent
          onClick={() => {
            clearLocalStorage();
            navigate("/another");
          }}
        >
          {MainEnum.GoAnother}
        </ButtonMainComponent>
        <ListOfItems dataService={dataService} />
      </ContainerSecuredComponent>
    </Layout>
  );
};
