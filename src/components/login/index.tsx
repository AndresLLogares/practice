import React, { useContext, useRef, useState } from "react";
import { Layout } from "../layout";
import {
  ButtonLogin,
  ContainerLogin,
  FormLogin,
  InputLogin,
  LabelLogin,
  TitleLogin,
} from "../../styles/login";
import { LoginEnum } from "../../enums/login";
import AuthContext from "../../context/userContext";

export const LoginComponent = () => {
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const contextData = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("ACA", userNameRef.current?.value);
    if (userNameRef?.current?.value && passwordRef.current?.value) {
      contextData?.fakeLoginFunction(
        event,
        userNameRef?.current?.value,
        passwordRef?.current?.value
      );
      return;
    }
    return;
  };

  return (
    <Layout>
      <ContainerLogin>
        <TitleLogin>{LoginEnum.Title}</TitleLogin>
        <FormLogin
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <LabelLogin>{LoginEnum.UserName}</LabelLogin>
          <InputLogin
            type="text"
            name="username"
            placeholder="User name"
            value={userNameRef.current?.value}
            id="username"
            ref={userNameRef}
          />
          <LabelLogin>{LoginEnum.Password}</LabelLogin>
          <InputLogin
            type="password"
            name="password"
            id="password"
            value={passwordRef.current?.value}
            placeholder="Password"
            ref={passwordRef}
          />
          <ButtonLogin type="submit">{LoginEnum.Submit}</ButtonLogin>
        </FormLogin>
      </ContainerLogin>
    </Layout>
  );
};
