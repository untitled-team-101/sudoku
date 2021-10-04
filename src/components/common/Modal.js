import React from "react"
import "./styles/Modal.scss"

const Modal = (props) => {
    const { toggleModal } = props;
    return (
        <div className="modalCanvas">
            <div className="modalOverlay" onClick={toggleModal}>

            </div>
            <div className="modalBody">
                <h2>Congratulations!</h2>
                <p>Scroll Down for Next Level !!</p>
                <button onClick={toggleModal}>Okay</button>
            </div>
        </div>
    )
}

export default Modal;