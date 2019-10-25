import React from "react";
import Modal from "react-modal";

const OptionModal = (params) => {
  return (
    <Modal isOpen={!!params.selectedOption}
           onRequestClose={params.handleOkayButton}
           contentLabel="Selected Option">
      <h3> Selected Option </h3>
      {params.selectedOption && <p> {params.selectedOption} </p>}
      <button onClick={params.handleOkayButton}> Okay </button>
    </Modal>
  );
};

export default OptionModal;
