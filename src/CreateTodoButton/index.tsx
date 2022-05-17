import React, {useContext} from "react";
import "./CreateTodoButton.css"
import {TodoContext} from "../TodoContext";

export const CreateTodoButton = () => {
    const { setOpenModal } = useContext(TodoContext);

    return (
        <button
            className="CreateTodoButton"
            onClick={() => setOpenModal((prevState: boolean) => !prevState)}
        >
            +
        </button>
    )
}