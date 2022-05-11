import React from "react";
import "./TodoCounter.css"

interface TodoCounterProps {
    todosCompleted: number;
    totalTodos: number;
}

export const TodoCounter = ({todosCompleted, totalTodos}: TodoCounterProps) => {
    return <h2 className="TodoCounter">Has completado {todosCompleted} de {totalTodos} TODOs</h2>
}