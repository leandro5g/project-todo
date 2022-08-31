import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import CirclePlusSvg from "@assets/circle-plus.svg";

import { Container } from "./button-form.styles";

type ButtonFormProps = TouchableOpacityProps;

const ButtonForm: React.FC<ButtonFormProps> = ({ ...rest }) => {
  return (
    <Container activeOpacity={0.9} {...rest}>
      <CirclePlusSvg width={RFValue(18)} height={RFValue(18)} />
    </Container>
  );
};

export { ButtonForm };
