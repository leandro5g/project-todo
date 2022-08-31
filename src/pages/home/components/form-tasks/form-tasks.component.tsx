import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHandleTask } from "@hooks/tasks/useHandleTask";
import { useTask } from "@hooks/tasks/useTask";

import { Input } from "@components/form/input/input.component";
import { ButtonForm } from "@components/buttons/button-form/button-form.component";

import {
  Container,
  FormContainer,
  ContentInfoTasks,
  TasksCreated,
  TasksFinish,
  WrapperTasks,
  CounterContainer,
  CounterText,
} from "./form-tasks.styles";

type FormData = {
  task: string;
};

const FormTasks: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  const { handleAddTask } = useHandleTask();
  const { tasks } = useTask();

  const countTaskDone = tasks.filter((task) => task.status === true).length;

  const onSubmit = useCallback(({ task }: FormData) => {
    handleAddTask(task);
    reset();
    clearErrors();
  }, []);

  return (
    <Container>
      <FormContainer>
        <Input
          isError={errors?.task?.type === "required"}
          control={control}
          name="task"
          placeholder="Adicione uma nova tarefa"
        />
        <ButtonForm onPress={handleSubmit(onSubmit)} />
      </FormContainer>

      <ContentInfoTasks>
        <WrapperTasks>
          <TasksCreated>Criadas</TasksCreated>
          <CounterContainer>
            <CounterText>{tasks?.length}</CounterText>
          </CounterContainer>
        </WrapperTasks>

        <WrapperTasks>
          <TasksFinish>Concluídas</TasksFinish>

          <CounterContainer>
            <CounterText>{countTaskDone}</CounterText>
          </CounterContainer>
        </WrapperTasks>
      </ContentInfoTasks>
    </Container>
  );
};

export { FormTasks };
