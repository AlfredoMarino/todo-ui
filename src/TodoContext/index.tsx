import {createContext, useState} from "react";
import {useLocalStorage} from "./useLocalStorage";
import {Todo} from "../App";

interface AppUIProps {
    isLoading: boolean;
    error: boolean;
    todosCompleted: number;
    totalTodos: number;
    searchValue: string;
    setSearchValue: Function;
    todos: Todo[];
    searchFilter: any;
    completeTodo: Function;
    deleteTodo: Function;
    openModal: boolean;
    setOpenModal: Function;
}

const defaultValue: AppUIProps = {
    isLoading: false,
    error: false,
    todosCompleted: 0,
    totalTodos: 0,
    searchValue: "",
    setSearchValue: () => {},
    todos: [],
    searchFilter: null,
    completeTodo: () => {},
    deleteTodo: () => {},
    openModal: false,
    setOpenModal: () => {}
};

export const TodoContext = createContext(defaultValue);

export const TodoProvider = (props: any) => {
    const {
        item: todos,
        saveItem: saveTodos,
        isLoading,
        error
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

    return (
        <TodoContext.Provider value={{
            isLoading,
            error,
            todosCompleted,
            totalTodos,
            searchValue,
            setSearchValue,
            todos,
            searchFilter,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
};