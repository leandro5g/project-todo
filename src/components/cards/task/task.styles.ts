import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.colors.base400};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(12)}px;
`;

export const ContentText = styled.View`
  flex: 1;
  padding: 0px ${RFValue(8)}px;
`;

export const TextTask = styled.Text`
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(18.6)}px;
  color: ${({ theme }) => theme.colors.base100};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContainerCheck = styled.View`
  height: ${RFValue(17.45)}px;
  width: ${RFValue(17.45)}px;
  border-radius: ${RFValue(17.45 / 2)}px;
  border-width: ${RFValue(2)}px;
  border-color: ${({ theme }) => theme.colors.primary};
`;
