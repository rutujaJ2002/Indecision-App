import React from "react";
import Modal from "react-modal";

const OptionModal = (props)=> (
    <Modal
       isOpen ={!!props.selectedOption}
       onRequestClose ={props.handleClearSelectedOption}
       contentLabel ="selected option"
       closeTimeoutMS={200}
       className="modal"
       >
        <h3>Selected Option :</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Ok</button>
    </Modal>
);

export default OptionModal;