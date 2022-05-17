import React, {useContext} from "react";
import "./TodoSearch.css"
import {TodoContext} from "../TodoContext";

interface TodoSearchProps {
    searchValue: string;
    setSearchValue: Function;
}

export const TodoSearch = () => {
    const { searchValue, setSearchValue }: TodoSearchProps = useContext(TodoContext);

    const onSearchValueChange = (event: any) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder={"Search"}
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
}