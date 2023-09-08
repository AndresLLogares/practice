import { styled } from "styled-components";
import { colors } from "../global/colors";
import { fontSizes, fontFamily } from "../global/fonts";

export const ContainerSecuredComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  margin-top: 5vh;
  margin-bottom: 5vh;
  flex-direction: column;
`;

export const TitleSecuredComponent = styled.h3`
  display: flex;
  font-family: ${fontFamily.roboto};
  font-size: ${fontSizes.subTitleWeb};
  font-weight: 800;
  color: ${colors.black};
`;
