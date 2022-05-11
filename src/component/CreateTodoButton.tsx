import React from "react";
import "./CreateTodoButton.css"

export const CreateTodoButton = () => {
    const onClickButton = (msg: string) => {
        alert(msg)
    };

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton("Aqui se levantara un modal")}
        >
            +
        </button>
    )
}