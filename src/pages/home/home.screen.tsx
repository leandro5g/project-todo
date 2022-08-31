import React from "react";

import { Header } from "@components/header/header.component";

import { Container, SafeArea } from "./home.styles";

const Home: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        <Header />
      </Container>
    </SafeArea>
  );
};

export { Home };
