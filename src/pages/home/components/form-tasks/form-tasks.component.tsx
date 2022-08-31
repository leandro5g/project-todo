import React from "react";

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

const FormTasks: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Input placeholder="Adicione uma nova tarefa" />
        <ButtonForm />
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
