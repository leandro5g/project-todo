import React from "react";

import { Input } from "@components/form/input/input.component";

import { Container, FormContainer } from "./form-tasks.styles";

const FormTasks: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Input />
      </FormContainer>
    </Container>
  );
};

export { FormTasks };
