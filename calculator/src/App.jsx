import React, { useState } from "react";
import styles from "./App.module.css";
import Input from "./input-display";
import BUTTON from "./button";

import Frontname1 from "./display";
import Display from "./input-display";

function App() {
  const BT = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  let [calval, setcalval] = useState("");
  const onbutton = (buttontext) => {
    console.log(buttontext);
    if (buttontext === "C") {
      setcalval("");
    } else if (buttontext === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newdisplayvalue = calval + buttontext;

      setcalval(newdisplayvalue);
    }
  };

  return (
    <div className={styles.front}>
      <Frontname1></Frontname1>
      <div className={styles.calculator}>
        <Display displayvalue={calval}></Display>

        <BUTTON name={BT} onbuttonclick={onbutton}></BUTTON>
      </div>
    </div>
  );
}

export default App;
