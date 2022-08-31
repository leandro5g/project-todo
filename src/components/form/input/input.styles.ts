import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base500};
  height: ${({ theme }) => theme.metrics.inputHeight}px;
  border-radius: ${RFValue(6)}px;
`;
