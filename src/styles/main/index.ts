import { styled } from "styled-components";
import { colors } from "../global/colors";
import { fontSizes, fontFamily } from "../global/fonts";

export const ContainerMainComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  margin-top: 5vh;
  margin-bottom: 5vh;
  flex-direction: column;
`;

export const TitleMainComponent = styled.h3`
  display: flex;
  font-family: ${fontFamily.roboto};
  font-size: ${fontSizes.subTitleWeb};
  font-weight: 800;
  color: ${colors.black};
`;

export const ButtonMainComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSizes.textWeb};
  font-family: ${fontFamily.poppins};
  color: ${colors.black};
  background-color: ${colors.white};
  height: 70px;
  width: 70px;
  border-radius: 5px;
  background-color: ${colors.white};
  border: 3px solid ${colors.turquoise};
  &:hover {
    cursor: pointer;
  }
`;
