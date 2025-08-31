import { useReducer, type ReactNode } from "react";
import todoReducer from "../components/modules/todo/reducer";
import { TodoContext, TodoReducerContext } from "../store/todoContext";

export const TodoProvider = ({ children }: { children: ReactNode }) => {

    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext value={todos}>
            <TodoReducerContext value={dispatch}>
                {children}
            </TodoReducerContext>
        </TodoContext>
    );
};

export default TodoProvider;
