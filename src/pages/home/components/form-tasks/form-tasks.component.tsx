import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

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
  const { handleSubmit, control } = useForm();

  const onSubmit = useCallback(({ task }: FormData) => {
    console.log(task);
  }, []);

  return (
    <Container>
      <FormContainer>
        <Input
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
            <CounterText>0</CounterText>
          </CounterContainer>
        </WrapperTasks>

        <WrapperTasks>
          <TasksFinish>Concluídas</TasksFinish>

          <CounterContainer>
            <CounterText>0</CounterText>
          </CounterContainer>
        </WrapperTasks>
      </ContentInfoTasks>
    </Container>
  );
};

export { FormTasks };
