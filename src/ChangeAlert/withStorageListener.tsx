import React, { useState } from 'react';

export const withStorageListener = (WrappedComponent: any) => {
    return function WrappedComponentWithStorageListener(props: any) {
        const [storageChange, setStorageChange] = useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === "TODOS_V1") {
                console.log("Hubo cambios en TODOS_V1");
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            props.synchronize()
            setStorageChange(false);
        }

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}