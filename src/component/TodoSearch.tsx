import React from "react";
import "./TodoSearch.css"

export const TodoSearch = () => {
    const onSearchValueChange = (event: any) => {
        console.log(event.target.value)
    };

    return (
        <input
            className="TodoSearch"
            placeholder={"Search"}
            onChange={onSearchValueChange}
        />
    );
}