import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${RFValue(48)}px;
  border-top-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.base400};
`;

export const TextMessage = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(19.6)}px;
  color: ${({ theme }) => theme.colors.base300};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: ${RFValue(16)}px;
`;

export const SubTextMessage = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(19.6)}px;
  color: ${({ theme }) => theme.colors.base300};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
