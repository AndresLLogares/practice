import {
  ButtonMainComponent,
  ContainerMainComponent,
  TitleMainComponent,
} from "../../styles/main";
import { MainEnum } from "../../enums/main";
import { Layout } from "../layout";
import { useNavigate } from "react-router";

export const MainComponent = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <ContainerMainComponent>
        <TitleMainComponent>{MainEnum.Welcome}</TitleMainComponent>
        <ButtonMainComponent onClick={() => navigate("/login")}>
          {MainEnum.GoTo}
        </ButtonMainComponent>
      </ContainerMainComponent>
    </Layout>
  );
};
