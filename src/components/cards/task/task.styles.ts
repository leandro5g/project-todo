import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type StatusProps = {
  status: boolean;
};

export const Container = styled.View<StatusProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(8)}px;
  background-color: ${({ theme, status }) =>
    status ? theme.colors.base500 : theme.colors.base400};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(12)}px;
`;

export const Button = styled.TouchableOpacity``;

export const ContentText = styled.View`
  flex: 1;
  padding: 0px ${RFValue(8)}px;
`;

export const TextTask = styled.Text<StatusProps>`
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(18.6)}px;
  color: ${({ theme }) => theme.colors.base100};
  font-family: ${({ theme }) => theme.fonts.regular};

  ${({ status }) =>
    status &&
    css`
      text-decoration-line: line-through;
      color: ${({ theme }) => theme.colors.base300};
    `}
`;

export const ContainerCheck = styled.View<StatusProps>`
  height: ${RFValue(17.45)}px;
  width: ${RFValue(17.45)}px;
  border-radius: ${RFValue(17.45 / 2)}px;

  ${({ status }) =>
    !status &&
    css`
      border-width: ${RFValue(2)}px;
      border-color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ status }) =>
    status &&
    css`
      background-color: ${({ theme }) => theme.colors.secondaryDark};
      justify-content: center;
      align-items: center;
    `}
`;
