import React, {useState} from 'react';
import './App.css';
import {AppUI} from "./AppUI";

export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

const defaultTodos: Todo[] = [
    {
        id: 1,
        text: "cortar cebolla",
        isCompleted: false
    },
    {
        id: 2,
        text: "estudiar",
        isCompleted: false
    },
    {
        id: 3,
        text: "llorar con la llorona",
        isCompleted: false
    },
    {
        id: 4,
        text: "Estudiar para la hackathon",
        isCompleted: false
    },
]

function App() {
    const [todos, setTodos] = useState(defaultTodos);
    const [searchValue, setSearchValue] = useState("");

    const todosCompleted = todos.filter(todo => todo.isCompleted).length;
    const totalTodos = todos.length;

    const searchFilter = (todo: Todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase());

    const completeTodo = (todoId: number) => {
        const newTodos = todos.map(todo => {
            if (todo.id === todoId) {
                todo.isCompleted = true;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (todoId: number) => {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
    };

    return (
        <AppUI
            todosCompleted={todosCompleted}
            totalTodos={totalTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            todos={todos}
            searchFilter={searchFilter}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    );
}

export default App;
