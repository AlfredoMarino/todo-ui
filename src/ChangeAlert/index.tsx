import './ChangeAlert.css';
import { useStorageListener } from "./useStorageListener";

interface ChangeAlertProps {
    synchronize: Function;
}

export const ChangeAlert = (props: ChangeAlertProps) => {
    const { show, toggleShow } = useStorageListener({ synchronize: props.synchronize });

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}
                    >
                        Yes!
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

// export const ChangeAlertWithStorageListener = useStorageListener(ChangeAlert);