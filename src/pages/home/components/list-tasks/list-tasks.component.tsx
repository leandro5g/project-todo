import React from "react";
import { useTask } from "@hooks/tasks/useTask";

import { EmptyTasks } from "@components/messages/empty-tasks/empty-tasks.component";
import { Task } from "@components/cards/task/task.component";

import { Container, List } from "./list-tasks.styles";

const ListTasks: React.FC = () => {
  const { tasks } = useTask();

  return (
    <Container>
      <List
        data={tasks}
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => <Task data={item as TaskDTO.TaskType} />}
        ListEmptyComponent={() => <EmptyTasks />}
      />
    </Container>
  );
};

export { ListTasks };
