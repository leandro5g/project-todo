import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base600};
`;

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal}px;
`;
