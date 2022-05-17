import React, {useContext} from "react";
import "./TodoCounter.css"
import {TodoContext} from "../TodoContext";

interface TodoCounterProps {
    todosCompleted: number;
    totalTodos: number;
}

export const TodoCounter = () => {
    const {todosCompleted, totalTodos}: TodoCounterProps = useContext(TodoContext);
    return <h2 className="TodoCounter">Has completado {todosCompleted} de {totalTodos} TODOs</h2>
}