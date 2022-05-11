import React, {useState} from "react";
import "./TodoSearch.css"

interface TodoSearchProps {
    searchValue: string;
    setSearchValue: Function;
}

export const TodoSearch = ({ searchValue, setSearchValue }: TodoSearchProps) => {
    const onSearchValueChange = (event: any) => {
        console.log(event.target.value)
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