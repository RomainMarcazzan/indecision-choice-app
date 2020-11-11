import React, { useState, useEffect } from "react";
import OptionsContext from "./context/options-context";
import Header from "./components/Header";
import AddOptionForm from "./components/AddOptionForm";
import ListOfOptions from "./components/ListOfOptions";
import PickOption from "./components/PickOption";

function App() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem("options"));
    if (dataStorage) {
      setOptions(dataStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  return (
    <OptionsContext.Provider value={{ options, setOptions }} className="App">
      <Header />
      <div className="container">
        <PickOption />
        <div className="widget">
          <ListOfOptions />
          <AddOptionForm />
        </div>
      </div>
    </OptionsContext.Provider>
  );
}

export default App;
