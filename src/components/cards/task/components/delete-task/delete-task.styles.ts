import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 35%;
  background-color: ${({ theme }) => theme.colors.danger};
  border-top-right-radius: ${RFValue(8)}px;
  border-bottom-right-radius: ${RFValue(8)}px;
`;
