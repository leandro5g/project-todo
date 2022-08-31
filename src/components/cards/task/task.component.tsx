import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import TrashSvg from "@assets/trash.svg";

import {
  Container,
  TextTask,
  ContainerCheck,
  ContentText,
} from "./task.styles";

const Task: React.FC = () => {
  return (
    <Container>
      <ContainerCheck></ContainerCheck>

      <ContentText>
        <TextTask>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </TextTask>
      </ContentText>

      <TrashSvg width={RFValue(14)} height={RFValue(14)} />
    </Container>
  );
};

export { Task };
