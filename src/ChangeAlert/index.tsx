import { withStorageListener } from "./withStorageListener";

const ChangeAlert = ({ show, toggleShow }: any) => {
    if (show) {
        return (
            <div>
                <p>Hubo cambios!!</p>
                <button onClick={() => toggleShow(false)}>
                    Volver a cargar la informacion
                </button>
            </div>
        )
    } else {
        return null;
    }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);