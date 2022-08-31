import React from "react";

import LogoSvg from "@assets/logo.svg";

import { Container } from "./header.styles";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoSvg />
    </Container>
  );
};

export { Header };
