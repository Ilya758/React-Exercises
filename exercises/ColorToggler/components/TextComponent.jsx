import React, { useContext } from "react";
import { AppContext } from "../App";

const TextComponent = () => {
  const { style, setRandomColor, state } = useContext(AppContext);

  return (
    <div>
      <h2 style={{ ...style, color: state.color }}>Text-Component!!</h2>
      <button onClick={setRandomColor}>Set random color</button>
    </div>
  );
};

export default TextComponent;
