import React from "react";

import { Header } from "@components/header/header.component";
import { FormTasks } from "./components/form-tasks/form-tasks.component";

import { Container, SafeArea, Content } from "./home.styles";

const Home: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        <Header />
        <Content>
          <FormTasks />
        </Content>
      </Container>
    </SafeArea>
  );
};

export { Home };
