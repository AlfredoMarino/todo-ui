import React from 'react';
import './App.css';
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {Modal} from "../modal";
import {TodoForm} from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import { useTodos } from './useTodos';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos';

export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

function App() {
    const {
        error,
        isLoading,
        todos,
        searchFilter,
        completeTodo,
        deleteTodo,
        openModal,
        
        todosCompleted,
        totalTodos,
        
        searchValue,
        setSearchValue,

        addTodo,
        setOpenModal
    } = useTodos();

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter todosCompleted={todosCompleted} totalTodos={totalTodos} />
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </TodoHeader>

            <TodoList
                error={error}
                isLoading={isLoading}
                searchText={searchValue}
                totalTodos={totalTodos}
                searchedTodos={todos.filter(searchFilter)}
                onError={() => <TodoError/>}
                onLoading={() => <TodoLoading/>}
                onEmptySearchResults={(searchText: string) => <p>No hay resultados para la busqueda "{searchText}"</p>}
            >
                {(todo: Todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                )}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}
            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    )
}

export default App;
