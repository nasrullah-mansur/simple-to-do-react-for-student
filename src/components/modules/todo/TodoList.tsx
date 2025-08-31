
import { useContext } from "react";
import { TodoContext } from "../../../store/todoContext";
import AddTask from "./AddTask";
import TodoItem from "./TodoItem";

export type HandleAddTodo = (p1: string) => void;
export type HandleStatusChange = (p1: number) => void;
export type HandleDeleteTodo = (p1: number) => void;
export type HandleUpdateTodo = (p1: number, p2: string) => void;

function TodoList() {


    const todos = useContext(TodoContext);


    return (
        <div className="container max-w-2xl mx-auto p-2 my-5 ">
            <h1 className="py-5 text-3xl text-center font-bold">To do list</h1>

            <AddTask />

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
                            <TodoItem todo={todo} key={todo.id} />)
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TodoList;