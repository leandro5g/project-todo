import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import TrashSvg from "@assets/trash.svg";

import {
  Container,
  TextTask,
  ContainerCheck,
  ContentText,
} from "./task.styles";

type TaskProps = {
  data: TaskDTO.TaskType;
};

const Task: React.FC<TaskProps> = ({ data }) => {
  return (
    <Container>
      <ContainerCheck></ContainerCheck>

      <ContentText>
        <TextTask>{data?.content}</TextTask>
      </ContentText>

      <TrashSvg width={RFValue(14)} height={RFValue(14)} />
    </Container>
  );
};

export { Task };
