import { useContext } from "react";
import { TaskContext } from "./TaskContext";


export const useTasks = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
      throw new Error("useTasks must be used within a TaskContextProvider");
    }
    return context;
  };