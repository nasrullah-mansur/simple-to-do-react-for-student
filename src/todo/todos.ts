
export interface ITodo {
    id: number;
    title: string;
    status: string;
}

const todos: ITodo[] = [
    { id: 1, title: "Learn JavaScript basics", status: "done" },
    { id: 2, title: "Practice array methods", status: "doing" },
    { id: 3, title: "Build a todo list app", status: "done" },
    { id: 4, title: "Study React components", status: "doing" },
    { id: 5, title: "Understand props and state", status: "done" },
    { id: 6, title: "Work with React hooks", status: "doing" },
    { id: 7, title: "Set up project with Vite", status: "done" },
    { id: 8, title: "Style app with TailwindCSS", status: "doing" },
    { id: 9, title: "Implement search in todos", status: "done" },
    { id: 10, title: "Deploy app to Netlify", status: "doing" }
];


export default todos;