import React, { useState, useContext } from "react";
import OptionsContext from "../context/options-context";
import uuid from "uuid";

const AddOptionForm = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const [optionText, setOptionText] = useState("");
  const [error, setError] = useState("");

  const handleAddOption = (e) => {
    e.preventDefault();
    if (!options.some((option) => option.optionText === optionText)) {
      setOptions([...options, { optionText, id: uuid() }]);
      setError("");
      setOptionText("");
    } else {
      setError("l'option existe déjà");
      setOptionText("");
    }
  };

  return (
    <div>
      {error && <p className="add-option-error">{error}</p>}
      <form className="add-option" onSubmit={handleAddOption}>
        <input
          className="add-option__input"
          value={optionText}
          onChange={(e) => {
            setOptionText(e.target.value);
          }}
        />
        <button className="button" disabled={optionText === ""}>
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddOptionForm;
