import React from "react";
import "./CreateTodoButton.css"

interface CreateTodoButtonProps {
    setOpenModal: Function;
}

export const CreateTodoButton = ({ setOpenModal }: CreateTodoButtonProps) => {
    return (
        <button
            className="CreateTodoButton"
            onClick={() => setOpenModal((prevState: boolean) => !prevState)}
        >
            +
        </button>
    )
}