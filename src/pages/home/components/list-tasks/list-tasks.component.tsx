import React from "react";

import { EmptyTasks } from "@components/messages/empty-tasks/empty-tasks.component";
import { Task } from "@components/cards/task/task.component";

import { Container, List } from "./list-tasks.styles";

const ListTasks: React.FC = () => {
  return (
    <Container>
      <List
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        renderItem={() => <Task />}
        ListEmptyComponent={() => <EmptyTasks />}
      />
    </Container>
  );
};

export { ListTasks };
