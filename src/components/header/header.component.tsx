import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "@assets/logo.svg";

import { Container } from "./header.styles";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoSvg height={RFValue(32)} width={RFValue(110.34)} />
    </Container>
  );
};

export { Header };
