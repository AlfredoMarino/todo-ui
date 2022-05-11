import React from 'react';
import './App.css';
import {TodoCounter} from "./component/TodoCounter";
import {TodoSearch} from "./component/TodoSearch";
import {CreateTodoButton} from "./component/CreateTodoButton";
import {TodoList} from "./component/TodoList";
import {TodoItem} from "./component/TodoItem";

const todos = [
    {
        text: "cortar cebolla",
        isCompleted: true
    },
    {
        text: "estudiar",
        isCompleted: false
    },
    {
        text: "llorar con la llorona",
        isCompleted: false
    },
]


function App() {
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
                {todos.map((todo, index) => <TodoItem key={index} text={todo.text} isCompleted={todo.isCompleted}/>)}
            </TodoList>
            <CreateTodoButton/>

        </React.Fragment>
    );
}

export default App;
