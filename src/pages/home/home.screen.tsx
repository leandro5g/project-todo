import React from "react";

import { Header } from "@components/header/header.component";
import { FormTasks } from "./components/form-tasks/form-tasks.component";
import { ListTasks } from "./components/list-tasks/list-tasks.component";

import { Container, SafeArea, Content } from "./home.styles";

const Home: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        <Header />
        <Content>
          <FormTasks />
          <ListTasks />
        </Content>
      </Container>
    </SafeArea>
  );
};

export { Home };
