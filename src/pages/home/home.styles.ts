import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const Container = styled.View`
  flex: 1;
`;
