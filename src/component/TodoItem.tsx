import "./TodoItem.css"

export const TodoItem = (props: any) => {
    const onComplete = () => {
        alert("Ya completaste el Todo " + props.text)
    };

    const onDelete = () => {
        alert("Borraste el Todo " + props.text)
    };

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.isCompleted && 'Icon-check--active'}`}
                onClick={onComplete}
            >√</span>
            <p className={`TodoItem-p ${props.isCompleted && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={onDelete}>X</span>
        </li>
    )
}