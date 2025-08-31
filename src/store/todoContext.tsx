// todoContext.ts
import { createContext, type Dispatch } from "react";
import type { TaskAction, TaskState } from "../components/modules/todo/interface";

// One for state (todos array)
export const TodoContext = createContext<TaskState>([]);

// One for dispatch
export const TodoReducerContext = createContext<Dispatch<TaskAction>>(() => { });
