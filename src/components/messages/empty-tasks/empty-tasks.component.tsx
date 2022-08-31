import React from "react";

import clipboard from "@assets/clipboard/Clipboard.png";

import {
  Container,
  TextMessage,
  SubTextMessage,
  Image,
} from "./empty-tasks.styles";

const EmptyTasks: React.FC = () => {
  return (
    <Container>
      <Image source={clipboard} />
      <TextMessage>Você ainda não tem tarefas cadastradas</TextMessage>

      <SubTextMessage>
        Crie tarefas e organize seus itens a fazer
      </SubTextMessage>
    </Container>
  );
};

export { EmptyTasks };
