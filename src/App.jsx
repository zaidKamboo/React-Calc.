import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  console.log(calVal);
  const handleClick = (buttonText) => {
    switch (buttonText) {
      case "C":
        setCalVal("");
        break;
      case "=":
        const result = eval(calVal);
        setCalVal(result);
        break;
      default:
        const newCalVal = calVal + buttonText;
        setCalVal(newCalVal);
        break;
    }

    // setCalVal(buttonText);
  };

  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}></Display>
      <ButtonsContainer handleClick={handleClick}></ButtonsContainer>
    </div>
  );
}

export default App;
