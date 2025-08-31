import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import type { HandleDeleteTodo, HandleStatusChange, HandleUpdateTodo } from "./TodoList";
import type { ITodo } from "./todos";

type ITodoItem = {
    todo: ITodo,
    onHandleStatusChange: HandleStatusChange,
    onHandleDeleteTodo: HandleDeleteTodo,
    onHandleUpdateTodo: HandleUpdateTodo
}

export default function TodoItem({ todo, onHandleStatusChange, onHandleDeleteTodo, onHandleUpdateTodo }: ITodoItem) {

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(todo.title);

    const handleUpdate = () => {
        onHandleUpdateTodo(todo.id, text);
        setIsEditing(false);
    }


    return (
        <tr className="*:text-gray-900 *:first:font-medium">
            <td className="px-3 py-2 w-10">{todo.id}</td>
            <td className="px-3 py-2">
                {isEditing
                    ?
                    <div className="flex">
                        <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="border rounded-sm border-gray-300 w-full px-2" />
                        <button onClick={handleUpdate} className="px-2 rounded-sm cursor-pointer h-auto bg-gray-300 ml-2">
                            <MdDone />
                        </button>
                    </div>
                    :
                    <span>{todo.title}</span>
                }

            </td>

            <td className="px-3 py-2 w-[70px]">
                <span className={`bg-${todo.status === 'done' ? 'green' : 'yellow'}-600 px-2 py-1 rounded-sm text-white text-xs font-medium`}>{todo.status}</span>
            </td>
            <td className="px-3 py-2 w-[60px] ">
                <div className=" flex gap-x-2">
                    <button onClick={() => setIsEditing(true)} className="w-8 h-6 text-sm flex justify-center items-center bg-green-600 text-white rounded-sm cursor-pointer">
                        <FaRegEdit />
                    </button>
                    <button onClick={() => onHandleStatusChange(todo.id)} className="w-8 h-6 text-sm flex justify-center items-center bg-blue-600 text-white rounded-sm cursor-pointer">
                        {todo.status === 'done' ? <IoEyeOff /> : <IoEye />}
                    </button>
                    <button onClick={() => onHandleDeleteTodo(todo.id)} className="w-8 h-6 text-sm flex justify-center items-center bg-red-600 text-white rounded-sm cursor-pointer">
                        <RiDeleteBin6Line />
                    </button>
                </div>
            </td>
        </tr>
    )
}
