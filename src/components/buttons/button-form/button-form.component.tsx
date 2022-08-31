import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import CirclePlusSvg from "@assets/circle-plus.svg";

import { Container } from "./button-form.styles";

const ButtonForm: React.FC = () => {
  return (
    <Container>
      <CirclePlusSvg width={RFValue(18)} height={RFValue(18)} />
    </Container>
  );
};

export { ButtonForm };
