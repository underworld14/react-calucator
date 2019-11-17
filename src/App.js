import React, { useState } from "react";
import "./App.css";

import Button from "./components/Button";

const App = () => {
  const [current, setCurrent] = useState("");

  const resetValue = () => {
    setCurrent("");
  };

  const addToCurrent = (symbol) => {
    setCurrent(current + symbol)
  }

  const buttons = [
    { symbol: "C", cols: 3, action: resetValue },
    { symbol: "/", cols: 1, action: addToCurrent },
    { symbol: "7", cols: 1, action: addToCurrent },
    { symbol: "8", cols: 1, action: addToCurrent },
    { symbol: "9", cols: 1, action: addToCurrent },
    { symbol: "X", cols: 1, action: addToCurrent },
    { symbol: "4", cols: 1, action: addToCurrent },
    { symbol: "5", cols: 1, action: addToCurrent },
    { symbol: "6", cols: 1, action: addToCurrent },
    { symbol: "-", cols: 1, action: addToCurrent },
    { symbol: "1", cols: 1, action: addToCurrent },
    { symbol: "2", cols: 1, action: addToCurrent },
    { symbol: "3", cols: 1, action: addToCurrent },
    { symbol: "+", cols: 1, action: addToCurrent },
    { symbol: "0", cols: 3, action: addToCurrent },
    { symbol: "=", cols: 1, action: addToCurrent }
  ];

  return (
    <div className="App">
      <input
        value={current}
      />

      {buttons.map((btn, i) => (
        <Button key={i} symbol={btn.symbol} action={(symbol)=> btn.action(symbol) } />
      ))}
    </div>

  );
};

export default App;
