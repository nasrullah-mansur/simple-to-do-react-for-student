
import { FaRegEdit } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddTask from "./AddTask";

function TodoList() {
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
                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2">1</td>
                            <td className="px-3 py-2">
                                <div className="flex">
                                    <input type="text" className="border rounded-sm border-gray-300 w-full px-2" />
                                    <button className="px-2 rounded-sm cursor-pointer h-auto bg-gray-300 ml-2">
                                        <MdDone />
                                    </button>
                                </div>
                            </td>

                            <td className="px-3 py-2 w-[70px]">
                                <span className="bg-green-600 px-2 py-1 rounded-sm text-white text-xs font-medium">Done</span>
                            </td>
                            <td className="px-3 py-2 w-[60px] ">
                                <div className=" flex gap-x-2">
                                    <button className="w-8 h-6 text-sm flex justify-center items-center bg-green-600 text-white rounded-sm cursor-pointer">
                                        <FaRegEdit />
                                    </button>
                                    <button className="w-8 h-6 text-sm flex justify-center items-center bg-blue-600 text-white rounded-sm cursor-pointer">
                                        <IoEyeOff />
                                    </button>
                                    <button className="w-8 h-6 text-sm flex justify-center items-center bg-red-600 text-white rounded-sm cursor-pointer">
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2">2</td>
                            <td className="px-3 py-2">
                                <span>Task name</span>
                            </td>

                            <td className="px-3 py-2 w-[70px]">
                                <span className="bg-green-600 px-2 py-1 rounded-sm text-white text-xs font-medium">Done</span>
                            </td>
                            <td className="px-3 py-2 w-[60px] ">
                                <div className=" flex gap-x-2">
                                    <button className="w-8 h-6 text-sm flex justify-center items-center bg-green-600 text-white rounded-sm cursor-pointer">
                                        <FaRegEdit />
                                    </button>
                                    <button className="w-8 h-6 text-sm flex justify-center items-center bg-blue-600 text-white rounded-sm cursor-pointer">
                                        <IoEyeOff />
                                    </button>
                                    <button className="w-8 h-6 text-sm flex justify-center items-center bg-red-600 text-white rounded-sm cursor-pointer">
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2">3</td>
                            <td className="px-3 py-2">To do something</td>
                            <td className="px-3 py-2 w-[70px]">
                                <span className="bg-yellow-600 px-2 py-1 rounded-sm text-white text-xs font-medium">Doing</span>
                            </td>
                            <td className="px-3 py-2 w-[60px] ">
                                <div className=" flex gap-x-2">
                                    <button className="w-8 h-6 text-sm flex justify-center items-center bg-green-600 text-white rounded-sm cursor-pointer">
                                        <FaRegEdit />
                                    </button>
                                    <button className="w-8 h-6 text-sm flex justify-center items-center bg-blue-600 text-white rounded-sm cursor-pointer">
                                        <IoEye />
                                    </button>
                                    <button className="w-8 h-6 text-sm flex justify-center items-center bg-red-600 text-white rounded-sm cursor-pointer">
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TodoList;