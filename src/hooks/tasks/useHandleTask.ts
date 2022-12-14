import { TaskContext } from "@contexts/task-context";
import { useContextSelector } from "use-context-selector";

export function useHandleTask() {
  const handleAddTask = useContextSelector(
    TaskContext,
    (task) => task.handleAddTask
  );

  const handleRemoveTask = useContextSelector(
    TaskContext,
    (task) => task.handleRemoveTask
  );

  const handleUpdateTask = useContextSelector(
    TaskContext,
    (task) => task.handleUpdateTask
  );

  return { handleAddTask, handleRemoveTask, handleUpdateTask };
}
