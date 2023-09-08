import { styled } from "styled-components";
import { colors } from "../global/colors";
import { fontSizes, fontFamily } from "../global/fonts";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  margin-top: 4vh;
  margin-bottom: 4vh;
`;

export const TitleLogin = styled.h5`
  display: flex;
  font-family: ${fontFamily.roboto};
  font-size: ${fontSizes.subTitleWeb};
  font-weight: 800;
  color: ${colors.black};
  margin: 0;
  margin-bottom: 2vh;
`;

export const FormLogin = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const LabelLogin = styled.label`
  display: flex;
  font-family: ${fontFamily.poppins};
  font-size: ${fontSizes.textWeb};
  font-weight: 700;
`;

export const InputLogin = styled.input`
  display: flex;
  font-family: ${fontFamily.poppins};
  font-size: ${fontSizes.textWeb};
  width: 200px;
  height: 20px;
  background-color: ${colors.white};
  border: 3px solid ${colors.red};
  border-radius: 5px;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

export const ButtonLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border: 3px solid ${colors.turquoise};
  font-family: ${fontFamily.poppins};
  font-size: ${fontSizes.textWeb};
  height: 70px;
  width: 70px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
