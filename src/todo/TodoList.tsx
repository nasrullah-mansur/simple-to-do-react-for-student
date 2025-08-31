
import { useReducer } from "react";
import AddTask from "./AddTask";
import todoReducer, { TODO_CASE } from "./reducer";
import TodoItem from "./TodoItem";

export type HandleAddTodo = (p1: string) => void;
export type HandleStatusChange = (p1: number) => void;
export type HandleDeleteTodo = (p1: number) => void;
export type HandleUpdateTodo = (p1: number, p2: string) => void;

function TodoList() {


    const [todos, dispatch] = useReducer(todoReducer, []);



    const handleAddTodo: HandleAddTodo = (data) => {
        dispatch({
            type: TODO_CASE.ADD_TASK,
            payload: data
        });
    }

    const handleStatusChange: HandleStatusChange = (todoId) => {
        dispatch({
            type: TODO_CASE.CHANGE_STATUS,
            payload: todoId
        })
    }

    const handleDeleteTodo: HandleDeleteTodo = (id) => {
        dispatch({
            type: TODO_CASE.DELETE_TASK,
            payload: id,
        })
    }

    const handleUpdateTodo: HandleUpdateTodo = (id, title) => {
        dispatch({
            type: TODO_CASE.UPDATE_TASK,
            payload: {
                id: id,
                title: title
            }
        })
    }

    return (
        <div className="container max-w-2xl mx-auto p-2 my-5 ">
            <h1 className="py-5 text-3xl text-center font-bold">To do list</h1>

            <AddTask onAddTodo={handleAddTodo} />

            <div className="rounded border border-gray-300 shadow-sm">
                <table className="min-w-full divide-y-2 divide-gray-200 table-fixed">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900">
                            <th className="px-3 py-2">#</th>
                            <th className="px-3 py-2">Task</th>
                            <th className="px-3 py-2">Status</th>
                            <th className="px-3 py-2 ">Action</th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {todos.map(todo => (
                            <TodoItem
                                onHandleDeleteTodo={handleDeleteTodo}
                                onHandleStatusChange={handleStatusChange}
                                onHandleUpdateTodo={handleUpdateTodo}
                                todo={todo}
                                key={todo.id} />)
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TodoList;