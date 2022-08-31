import React from "react";

import { Header } from "@components/header/header.component";
import { FormTasks } from "./components/form-tasks/form-tasks.component";

import { Container, SafeArea } from "./home.styles";

const Home: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        <Header />
        <FormTasks />
      </Container>
    </SafeArea>
  );
};

export { Home };
