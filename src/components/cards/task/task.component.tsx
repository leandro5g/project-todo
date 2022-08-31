import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useHandleTask } from "@hooks/tasks/useHandleTask";

import TrashSvg from "@assets/trash.svg";
import CheckSvg from "@assets/check.svg";

import {
  Container,
  TextTask,
  ContainerCheck,
  ContentText,
  Button,
} from "./task.styles";

type TaskProps = {
  data: TaskDTO.TaskType;
};

const Task: React.FC<TaskProps> = ({ data }) => {
  const { handleUpdateTask } = useHandleTask();

  return (
    <Container status={data?.status}>
      <Button onPress={() => handleUpdateTask(data?.id)}>
        <ContainerCheck status={data?.status}>
          {data?.status && (
            <CheckSvg height={RFValue(10)} width={RFValue(10)} />
          )}
        </ContainerCheck>
      </Button>

      <ContentText>
        <TextTask status={data?.status}>{data?.content}</TextTask>
      </ContentText>

      <TrashSvg width={RFValue(14)} height={RFValue(14)} />
    </Container>
  );
};

export { Task };
