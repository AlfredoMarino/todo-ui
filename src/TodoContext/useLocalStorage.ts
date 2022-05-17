import {useEffect, useState} from "react";
import {Todo} from "../App";

const defaultTodos: Todo[] = [
    {
        id: 1,
        text: "cortar cebolla",
        isCompleted: false
    },
    {
        id: 2,
        text: "estudiar",
        isCompleted: false
    },
    {
        id: 3,
        text: "llorar con la llorona",
        isCompleted: false
    },
    {
        id: 4,
        text: "Estudiar para la hackathon",
        isCompleted: false
    },
];


export const useLocalStorage = (itemId: string, initialValue: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemId);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemId, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
                setIsLoading(false);
            } catch (e: any) {
                console.error(e);
                setError(e);
            }
        }, 1000);
    }, []);

    const saveItem = (newItem: any) => {
        try {
            localStorage.setItem(itemId, JSON.stringify(newItem));
            setItem(newItem);
        } catch (e: any) {
            console.error(e);
            setError(e);
        }
    }

    return {
        item,
        saveItem,
        isLoading,
        error
    };
}