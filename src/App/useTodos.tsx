import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Todo } from "./App";

export const useTodos = () => {
    const {
        item: todos,
        saveItem: saveTodos,
        isLoading,
        error,
        synchronize: synchronizeTodos
    } = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);

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

    const addTodo = (text: string) => {
        const newTodos: Todo[] = [...todos];
        let id = 0;
        if (newTodos.length > 0) {
            id = Math.max(...newTodos.map(todo => todo.id)) + 1;
        }

        newTodos.push({
            text,
            id,
            isCompleted: false
        });
        saveTodos(newTodos)
    }

    return {
        isLoading,
        error,
        todosCompleted,
        totalTodos,
        searchValue,
        setSearchValue,
        todos,
        searchFilter,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        synchronizeTodos
    }
};