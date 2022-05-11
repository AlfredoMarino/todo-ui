import "./TodoItem.css"

export const TodoItem = (props: any) => {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.isCompleted && 'Icon-check--active'}`}>√</span>
            <p className={`TodoItem-p ${props.isCompleted && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete">X</span>
        </li>
    )
}