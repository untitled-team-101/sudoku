import React from "react"
import "../styles/Modal.scss"

const Modal = (props) => {
    const { toggleModal, heading, description, buttonText = 'Ok' } = props;
    return (
        <div className="modalCanvas">
            <div className="modalOverlay" onClick={toggleModal}>
            </div>
            <div className="modalBody">
                <h2>{heading}</h2>
                <p>{description}</p>
                <button onClick={toggleModal}>{buttonText}</button>
            </div>
        </div>
    )
}

export default Modal;