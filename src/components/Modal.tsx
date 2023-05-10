import React from 'react';
import "../sass/main.css";

function Modal(props) {

    if(!props.show) {
        return null;
    }

    return (
    <>
<div className="modal" onClick={props.onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
            <h4 className="modal-title">Modal title</h4>
        </div>
        <div className="modal-body">
            This is the body of the modal      
        </div>
        <div className="modal-footer">
        <button onClick={props.onClose} className="button">&times;</button>
        </div>
    </div>
</div>
    </>
    )
}

export default Modal;