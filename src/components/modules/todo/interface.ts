
export interface ITodo {
    id: number;
    title: string;
    status: "done" | "doing";
}

export type TaskState = ITodo[];

export enum TODO_CASE {
    ADD_TODO = "ADD_TODO",
    CHANGE_STATUS = "CHANGE_STATUS",
    UPDATE_TASK = "UPDATE_TASK",
    DELETE_TASK = "DELETE_TASK",
}

export type TaskAction =
    | { type: TODO_CASE.ADD_TODO; payload: string }
    | { type: TODO_CASE.CHANGE_STATUS; payload: number }
    | { type: TODO_CASE.UPDATE_TASK; payload: { id: number; title: string } }
    | { type: TODO_CASE.DELETE_TASK; payload: number };
