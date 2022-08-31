import React from "react";

import { Input } from "@components/form/input/input.component";
import { ButtonForm } from "@components/buttons/button-form/button-form.component";

import { Container, FormContainer } from "./form-tasks.styles";

const FormTasks: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Input placeholder="Adicione uma nova tarefa" />
        <ButtonForm />
      </FormContainer>
    </Container>
  );
};

export { FormTasks };
