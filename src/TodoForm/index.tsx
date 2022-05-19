import {useState} from "react";
import './TodoForm.css';

interface TodoFormProps {
    addTodo: Function;
    setOpenModal: Function;
}

export const TodoForm = ({ addTodo, setOpenModal }: TodoFormProps) => {
    const [newTodoValue, setNewTodoValue] = useState("");

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event: any) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder={"Comprar mascarillas"}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button type={"submit"} className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}