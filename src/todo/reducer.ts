import type { ITodo } from "./todos";

export enum TODO_CASE {
    "ADD_TASK" = "ADD_TASK",
    "CHANGE_STATUS" = "CHANGE_STATUS",
    "UPDATE_TASK" = "UPDATE_TASK",
    "DELETE_TASK" = "DELETE_TASK"
}

interface Action {
    type: string;
    payload: unknown;
}

export default function todoReducer(state: ITodo[], action: Action) {
    switch (action.type) {
        case TODO_CASE.ADD_TASK:
            return [
                ...state,
                {
                    id: state.length + 1,
                    status: 'doing',
                    title: action.payload,
                }
            ];

        case TODO_CASE.CHANGE_STATUS: {
            const updateTodos = state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        status: todo.status === 'done' ? 'doing' : 'done'
                    }
                } else {
                    return todo;
                }
            })


            return updateTodos;
        }

        case TODO_CASE.UPDATE_TASK: {

            const isTodoExist = state.find(todo => todo.id === action.payload.id);

            if (!isTodoExist) return state;

            const updateTodos = state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        title: action.payload.title
                    }
                }
                return todo;
            })

            return updateTodos;
        }

        case TODO_CASE.DELETE_TASK: {
            const isTodoExist = state.find(todo => todo.id === action.payload);

            if (!isTodoExist) return state;

            const updateTodos = state.filter(item => item.id != action.payload);

            return updateTodos;
        }

        default:
            return state;
    }
}