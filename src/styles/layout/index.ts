import { styled } from "styled-components";
import { colors } from "../global/colors";

export const LayoutComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.white};
`;
