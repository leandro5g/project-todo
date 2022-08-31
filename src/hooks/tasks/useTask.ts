import { TaskContext } from "@contexts/task-context";
import { useContextSelector } from "use-context-selector";

export function useTask() {
  const tasks = useContextSelector(TaskContext, (task) => task.tasks);

  return { tasks };
}
