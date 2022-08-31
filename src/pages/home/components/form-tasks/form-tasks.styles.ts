import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal}px;
  width: 100%;
`;

export const FormContainer = styled.View`
  width: 100%;
  position: relative;
  z-index: 9999;
  top: -${({ theme }) => theme.metrics.inputHeight / 2}px;
  flex-direction: row;
  justify-content: space-between;
`;
