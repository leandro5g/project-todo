import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TaskContextData = {
  tasks: TaskDTO.TaskType[];
  handleAddTask(content: string): void;
  handleRemoveTask(taskId: string): void;
};

const TaskContext = createContext({} as TaskContextData);

const KEY_TASK = "@todo/app/task";

const TaskContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<TaskDTO.TaskType[]>([]);

  useEffect(() => {
    loadTaskStorage();
  }, []);

  const loadTaskStorage = useCallback(async () => {
    const tasksStorage = await AsyncStorage.getItem(KEY_TASK);

    if (tasksStorage) {
      const parseTasks = JSON.parse(tasksStorage);

      setTasks(parseTasks);
    }
  }, []);

  const saveTasksStorage = useCallback(
    async (saveTasks: TaskDTO.TaskType[]) => {
      await AsyncStorage.setItem(KEY_TASK, JSON.stringify(saveTasks));
    },
    []
  );

  const handleAddTask = useCallback((content: string) => {
    const newTask: TaskDTO.TaskType = {
      id: String(uuid.v4()),
      content,
      status: false,
    };

    setTasks((oldValue) => {
      saveTasksStorage([...oldValue, newTask]);

      return [...oldValue, newTask];
    });
  }, []);

  const handleRemoveTask = useCallback(
    (taskId: string) => {
      const filterTasks = tasks.filter((task) => task.id !== taskId);

      setTasks(filterTasks);
      saveTasksStorage(filterTasks);
    },
    [tasks]
  );

  return (
    <TaskContext.Provider value={{ tasks, handleAddTask, handleRemoveTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
