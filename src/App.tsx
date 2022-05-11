import React, {useState} from 'react';
import './App.css';
import {TodoCounter} from "./component/TodoCounter";
import {TodoSearch} from "./component/TodoSearch";
import {CreateTodoButton} from "./component/CreateTodoButton";
import {TodoList} from "./component/TodoList";
import {TodoItem} from "./component/TodoItem";

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
        <React.Fragment>
            <TodoCounter todosCompleted={todosCompleted} totalTodos={totalTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

            <TodoList>
                {todos.filter(searchFilter).map(todo => (
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
    );
}

export default App;
