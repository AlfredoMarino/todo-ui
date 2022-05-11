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
    const localStorageTodos = localStorage.getItem("TODOS_V1");
    let parsedTodos;

    if (!localStorageTodos) {
        localStorage.setItem("TODOS_V1", JSON.stringify([]));
        parsedTodos = [];
    } else {
        parsedTodos = JSON.parse(localStorageTodos);
    }

    const [todos, setTodos] = useState(parsedTodos);
    const [searchValue, setSearchValue] = useState("");

    const todosCompleted = todos.filter((todo: Todo) => todo.isCompleted).length;
    const totalTodos = todos.length;

    const saveTodos = (newTodos: Todo[]) => {
        localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    const searchFilter = (todo: Todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase());

    const completeTodo = (todoId: number) => {
        const newTodos = todos.map((todo: Todo) => {
            if (todo.id === todoId) {
                todo.isCompleted = true;
            }
            return todo;
        });
        saveTodos(newTodos);
    };

    const deleteTodo = (todoId: number) => {
        const newTodos = todos.filter((todo: Todo) => todo.id !== todoId);
        saveTodos(newTodos);
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
