import React from "react";
import { LayoutComponent } from "../../styles/layout";

export interface WrapperProps {
  children: React.ReactNode;
}

export const Layout = (props: WrapperProps) => {
  return <LayoutComponent>{props.children}</LayoutComponent>;
};
