import React from "react";
import {
  ContainerList,
  ContainerListComponent,
  TextListComponent,
} from "../../styles/list";
import { RickEnum } from "../../enums/response";

interface propsEnum {
  dataService: RickEnum;
}

export const ListOfItems = (props: propsEnum) => {
  return (
    <ContainerList>
      <ContainerListComponent>
        <TextListComponent>{props?.dataService?.name}</TextListComponent>
      </ContainerListComponent>
    </ContainerList>
  );
};
