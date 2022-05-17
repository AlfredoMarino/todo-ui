import React, {useEffect, useState} from 'react';
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
];

const useLocalStorage = (itemId: string, initialValue: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemId);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemId, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
                setIsLoading(false);
            } catch (e: any) {
                console.error(e);
                setError(e);
            }
        }, 1000);
    }, []);

    const saveItem = (newItem: any) => {
        try {
            localStorage.setItem(itemId, JSON.stringify(newItem));
            setItem(newItem);
        } catch (e: any) {
            console.error(e);
            setError(e);
        }
    }

    return {
        item,
        saveItem,
        isLoading,
        error
    };
}

function App() {
    const {
        item: todos,
        saveItem: saveTodos,
        isLoading,
        error
    } = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = useState("");

    const todosCompleted = todos.filter((todo: Todo) => todo.isCompleted).length;
    const totalTodos = todos.length;

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
            isLoading={isLoading}
            error={error}
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
