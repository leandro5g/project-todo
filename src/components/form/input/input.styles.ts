import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type InputContainerProps = {
  isFocus?: boolean;
  isError?: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const InputText = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme?.colors?.base300,
}))<InputContainerProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base500};
  height: ${({ theme }) => theme.metrics.inputHeight}px;
  border-radius: ${RFValue(6)}px;
  padding: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(22.4)}px;
  color: ${({ theme }) => theme.colors.base100};
  border-width: ${RFValue(1)}px;
  border-color: ${({ isFocus, theme }) =>
    isFocus ? theme.colors?.secondaryDark : "transparent"};

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.colors.danger};
    `}
`;
