import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: ${({ theme }) => theme.metrics.inputHeight}px;
  width: ${({ theme }) => theme.metrics.inputHeight}px;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: ${RFValue(6)}px;
  margin-left: ${RFValue(4)}px;
  justify-content: center;
  align-items: center;
`;
