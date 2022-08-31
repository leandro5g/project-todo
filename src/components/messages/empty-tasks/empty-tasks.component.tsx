import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import ClipSvg from "@assets/clipboard.svg";

import { Container, TextMessage, SubTextMessage } from "./empty-tasks.styles";

const EmptyTasks: React.FC = () => {
  return (
    <Container>
      <ClipSvg height={RFValue(57)} width={RFValue(57)} />
      <TextMessage>Você ainda não tem tarefas cadastradas</TextMessage>

      <SubTextMessage>
        Crie tarefas e organize seus itens a fazer
      </SubTextMessage>
    </Container>
  );
};

export { EmptyTasks };
