import React, { useState, useContext } from "react";
import OptionsContext from "../context/options-context";
import Modal from "react-modal";

const PickOption = () => {
  const { options } = useContext(OptionsContext);
  const [optionPick, setOptionPick] = useState("");
  const [showModal, setShowModal] = useState(false);

  const selectOption = () => {
    const optionPickRandom =
      options[Math.floor(Math.random() * options.length)];
    setOptionPick(optionPickRandom.optionText);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setOptionPick("");
  };

  return (
    <div>
      <Modal
        isOpen={showModal}
        contentLabel="Option choisie par l'ordinateur"
        onRequestClose={handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Option choisie par l'ordinateur:</h3>
        {optionPick && <p className="modal__body">{optionPick}</p>}
        <button className="button" onClick={handleCloseModal}>
          Retour
        </button>
      </Modal>
      <button
        className="big-button"
        onClick={selectOption}
        disabled={options.length < 1}
      >
        Que dois-je faire ?
      </button>
    </div>
  );
};

export default PickOption;
