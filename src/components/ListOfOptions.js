import React, { useContext } from "react";
import OptionsContext from "../context/options-context";
import Option from "./Option";

const ListOfOptions = () => {
  const { options, setOptions } = useContext(OptionsContext);

  const handleRemoveAll = () => {
    setOptions([]);
  };

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Vos options:</h3>
        <button
          className="button button--link"
          onClick={handleRemoveAll}
          disabled={options.length < 1}
        >
          Tout effacer
        </button>
      </div>
      {options.length === 0 && (
        <p className="widget__message">Ajoutez une option pour commencer:</p>
      )}
      {options.map((option, index) => (
        <Option key={option.id} option={option} count={index + 1} />
      ))}
    </div>
  );
};

export default ListOfOptions;
