import React, { useState } from 'react';

interface useStorageListenerProps {
    synchronize: Function;
}

export const useStorageListener = (props: useStorageListenerProps) => {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === "TODOS_V1") {
            console.log("Hubo cambios en TODOS_V1");
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        props.synchronize();
        setStorageChange(false);
    }

    return {
        show: storageChange,
        toggleShow
    }
}