import React from "react";
import "./TodoSearch.css"

interface TodoSearchProps {
    searchValue: string;
    setSearchValue: Function;
    isLoading?: boolean;
}

export const TodoSearch = ({ searchValue, setSearchValue, isLoading }: TodoSearchProps) => {

    const onSearchValueChange = (event: any) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder={"Search"}
            onChange={onSearchValueChange}
            value={searchValue}
            disabled={isLoading}
        />
    );
}