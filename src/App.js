import React, { useState } from "react";
import "./css/style.css";

import Button from "./components/Button";

const App = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState([]);
  const [nextIsReset, setNextIsReset] = useState(false);

  const resetValue = () => {
    setCurrent("0");
    setPrevious([]);
    setNextIsReset(false);
  };

  const addToCurrent = (symbol) => {
    if (["/", "-", "+", "*"].indexOf(symbol) > -1) {
      let data = previous;
      data.push(current + symbol)
      setPrevious(data)
      setCurrent("0")
      setNextIsReset(true)
    } else {
      if ((current === "0" && symbol !== ".") || nextIsReset) {
        setCurrent(symbol);
        setNextIsReset(false);
      } else {
        setCurrent(current + symbol)
      }
    }
  }

  const calculate = (symbol) => {
    if (previous.length > 0) {
      let data = eval(String(previous[previous.length -1] + current));
      setCurrent(data);
    } 
  }

  const buttons = [
    { symbol: "C", cols: 3, action: resetValue },
    { symbol: "/", cols: 1, action: addToCurrent },
    { symbol: "7", cols: 1, action: addToCurrent },
    { symbol: "8", cols: 1, action: addToCurrent },
    { symbol: "9", cols: 1, action: addToCurrent },
    { symbol: "*", cols: 1, action: addToCurrent },
    { symbol: "4", cols: 1, action: addToCurrent },
    { symbol: "5", cols: 1, action: addToCurrent },
    { symbol: "6", cols: 1, action: addToCurrent },
    { symbol: "-", cols: 1, action: addToCurrent },
    { symbol: "1", cols: 1, action: addToCurrent },
    { symbol: "2", cols: 1, action: addToCurrent },
    { symbol: "3", cols: 1, action: addToCurrent },
    { symbol: "+", cols: 1, action: addToCurrent },
    { symbol: "0", cols: 2, action: addToCurrent },
    { symbol: ".", cols: 1, action: addToCurrent },
    { symbol: "=", cols: 1, action: calculate }
  ];

  return (
    <div className="App">
        { (previous.length > 0) ? <div className="floaty-right" > {previous[previous.length - 1]} </div>
        : null }
         <input className="input-calc" value={current} />
      {buttons.map((btn, i) => (
        <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol)=> btn.action(symbol) } />
      ))}
    </div>

  );
};

export default App;
