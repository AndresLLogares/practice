import { styled } from "styled-components";
import { colors } from "../global/colors";
import { fontSizes, fontFamily } from "../global/fonts";

export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  margin-top: 4vh;
  margin-bottom: 4vh;
`;

export const ContainerListComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: fit-content;
  flex-direction: column;
`;

export const TextListComponent = styled.p`
  display: flex;
  font-family: ${fontFamily.poppins};
  font-size: ${fontSizes.textWeb};
  font-weight: 700;
`;
