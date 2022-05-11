import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import React from "react";
import {Todo} from "./App";

interface AppUIProps {
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