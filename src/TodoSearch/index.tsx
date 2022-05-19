import React from "react";
import "./TodoSearch.css"

interface TodoSearchProps {
    searchValue: string;
    setSearchValue: Function;
}

export const TodoSearch = ({ searchValue, setSearchValue }: TodoSearchProps) => {

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