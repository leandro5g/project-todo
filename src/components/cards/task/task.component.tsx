import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useHandleTask } from "@hooks/tasks/useHandleTask";
import { MotiView, useAnimationState } from "moti";

import Swipeable from "react-native-gesture-handler/Swipeable";

import TrashSvg from "@assets/trash.svg";
import CheckSvg from "@assets/check.svg";

import { DeleteTask } from "./components/delete-task/delete-task.component";

import {
  Container,
  TextTask,
  ContainerCheck,
  ContentText,
  Button,
  Content,
} from "./task.styles";

type TaskProps = {
  data: TaskDTO.TaskType;
};

const Task: React.FC<TaskProps> = ({ data }) => {
  const { handleUpdateTask, handleRemoveTask } = useHandleTask();

  return (
    <Container
      from={{
        opacity: 0.4,
        top: -RFValue(30),
      }}
      animate={{
        opacity: 1,
        top: 0,
      }}
      transition={{
        type: "timing",
      }}
    >
      <Swipeable
        overshootRight={false}
        onSwipeableOpen={() => handleRemoveTask(data?.id)}
        renderRightActions={() => <DeleteTask />}
      >
        <Content status={data?.status}>
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
        </Content>
      </Swipeable>
    </Container>
  );
};

export { Task };
