import "./TodoItem.css"
import {Todo} from "../App";

interface TodoItemProps {
    todo: Todo;
    onComplete: any;
    onDelete: any;
}

export const TodoItem = ({todo, onComplete, onDelete}: TodoItemProps) => {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${todo.isCompleted && 'Icon-check--active'}`}
                onClick={onComplete}
            >√</span>
            <p className={`TodoItem-p ${todo.isCompleted && 'TodoItem-p--complete'}`}>
                {todo.text}
            </p>
            <span className="Icon Icon-delete" onClick={onDelete}>X</span>
        </li>
    )
}