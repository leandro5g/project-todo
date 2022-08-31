import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal}px;
  width: 100%;
  align-items: center;
`;

export const FormContainer = styled.View`
  position: absolute;
  z-index: 9999;
  width: 100%;
  top: -${({ theme }) => theme.metrics.inputHeight / 2}px;
`;
