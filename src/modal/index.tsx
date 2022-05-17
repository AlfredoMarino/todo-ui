import {createPortal} from "react-dom";
import "./Modal.css"

export const Modal = (props: any) => {
    const container = document.getElementById("modal");

    const modal = (
        <div className="ModalBackground">
            {props.children}
        </div>
    );

    return container ? createPortal(modal, container) : modal;
}