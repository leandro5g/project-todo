import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(127)}px;
  background-color: ${({ theme }) => theme.colors.base700};
  width: 100%;
  align-items: center;
  padding-top: ${RFValue(25)}px;
`;
