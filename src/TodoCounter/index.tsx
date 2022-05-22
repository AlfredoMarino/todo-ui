import "./TodoCounter.css"

interface TodoCounterProps {
    todosCompleted: number;
    totalTodos: number;
    isLoading?: boolean;
}

export const TodoCounter = ({todosCompleted, totalTodos, isLoading}: TodoCounterProps) => {
    return <h2 className={`TodoCounter ${!!isLoading && "TodoCounter--loading"}`}>
        Has completado {todosCompleted} de {totalTodos} TODOs
    </h2>
}