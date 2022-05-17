import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import React, {useContext} from "react";
import {Todo} from "./App";
import {TodoContext} from "./TodoContext";
import {Modal} from "./modal";
import {TodoForm} from "./TodoForm";

export const AppUI = () => {
    const {
        error,
        isLoading,
        todos,
        searchFilter,
        completeTodo,
        deleteTodo,
        openModal
    } = useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

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

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton/>
        </React.Fragment>
    )
}