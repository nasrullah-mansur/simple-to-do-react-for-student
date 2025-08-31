
import { TODO_CASE, type TaskAction, type TaskState } from "./interface";


export default function todoReducer(state: TaskState, action: TaskAction): TaskState {
    switch (action.type) {
        case TODO_CASE.ADD_TODO:
            return [
                ...state,
                { id: state.length + 1, title: action.payload, status: "doing" },
            ];

        case TODO_CASE.CHANGE_STATUS:
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, status: todo.status === "done" ? "doing" : "done" }
                    : todo
            );

        case TODO_CASE.UPDATE_TASK:
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, title: action.payload.title }
                    : todo
            );

        case TODO_CASE.DELETE_TASK:
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state;
    }
}
