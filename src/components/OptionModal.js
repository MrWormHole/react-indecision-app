import React from "react";
import Modal from "react-modal";

const OptionModal = (params) => {
  return (
    <Modal isOpen={!!params.selectedOption}
           onRequestClose={params.handleOkayButton}
           contentLabel="Selected Option"
           closeTimeoutMS={250}
           className="modal">
      <h3 className="modal-title"> Selected Option </h3>
      {params.selectedOption && <p class="modal-body"> {params.selectedOption} </p>}
      <button onClick={params.handleOkayButton}
              className="small-button"> 
              Okay 
      </button>
    </Modal>
  );
};

export default OptionModal;
