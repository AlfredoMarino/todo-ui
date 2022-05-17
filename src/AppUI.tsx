import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import React from "react";
import {Todo} from "./App";

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
}

export const AppUI = (
    {
        isLoading,
        error,
        todosCompleted,
        totalTodos,
        searchValue,
        setSearchValue,
        todos,
        searchFilter,
        completeTodo,
        deleteTodo
    }: AppUIProps
) => {
    return (
        <React.Fragment>
            <TodoCounter todosCompleted={todosCompleted} totalTodos={totalTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

            <TodoList>
                {error && <p>Hubo un error</p>}
                {isLoading && <p>Estamos cargando...</p>}
                {(!isLoading && !todos.length) && <p>Crea tu primer todo!!</p>}
                {todos.filter(searchFilter).map((todo: Todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton/>
        </React.Fragment>
    )
}