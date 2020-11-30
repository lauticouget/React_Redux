import React, { useState } from "react";
import Button from "./components/Button";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  const [stack, setStack] = useState("");

  return (
    <main className="react-calculator">
      <Result value={stack} />
      <Numbers
        onClickNumber={(number) => {
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={() => setStack("")}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => setStack(`${stack}${operation}`)}
        onClickEqual={(equal) => setStack(eval(stack).toString())}
      />
    </main>
  );
};

export default App;
