import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  padding-bottom: ${RFValue(20)}px;
`;

export const FormContainer = styled.View`
  width: 100%;
  position: relative;
  z-index: 9999;
  top: -${({ theme }) => theme.metrics.inputHeight / 2}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentInfoTasks = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperTasks = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TasksCreated = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TasksFinish = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const CounterContainer = styled.View`
  width: ${RFValue(25)}px;
  height: ${RFValue(19)}px;
  background-color: ${({ theme }) => theme.colors.base400};
  border-radius: ${RFValue(1000)}px;
  margin-left: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;
`;

export const CounterText = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.base200};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
