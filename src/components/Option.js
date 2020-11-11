import React, { useContext } from "react";
import OptionsContext from "../context/options-context";

const Option = ({ option, count }) => {
  const { options, setOptions } = useContext(OptionsContext);

  const removeOption = (optionId) => {
    setOptions(options.filter((option) => option.id !== optionId));
  };

  return (
    <div className="option">
      <p className="option__text">
        {count}. {option.optionText}
      </p>
      <button
        className="button button--link"
        onClick={() => removeOption(option.id)}
      >
        effacer
      </button>
    </div>
  );
};

export default Option;
