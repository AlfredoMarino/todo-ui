import React from 'react';
import './App.css';
import {AppUI} from "./AppUI";
import {TodoProvider} from "./TodoContext";

export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
