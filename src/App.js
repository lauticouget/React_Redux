import React from "react";
import Button from "./components/Button";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  const clickHandlerFunction = (text) => {
    console.log("Button.clickHandler", text);
  };

  return (
    <main className="react-calculator">
      <Result value={undefined} />
      <Numbers onClickNumber={number => {
        console.log("number:", number);
      }}/>
      <Functions
        onContentClear={() => console.log("content clear")}
        onDelete={() => console.log("on delete")}
      />
      <MathOperations
        onClickOperation={(operation) => console.log("Operation: ", operation)}
        onClickEqual={(equal) => console.log("Equal: ", equal)}
      />
    </main>
  );
};

export default App;
