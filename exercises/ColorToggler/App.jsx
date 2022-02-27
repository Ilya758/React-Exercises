import React, { createContext, useEffect, useReducer, useRef } from "react";
import TextComponent from "./components/TextComponent";

export const AppContext = createContext();

const style = { textAlign: "center" };
const COLORS = [
  "red",
  "yellow",
  "pink",
  "green",
  "brown",
  "magenta",
  "cyan",
  "orange",
  "purple",
  "grey",
];
const reducer = (state, action) => {
  // console.log(action.payload);

  switch (action.type) {
    case "show": {
      return { ...state, visible: true };
    }
    case "toggle": {
      return { ...state, visible: !state.visible };
    }
    case "color": {
      return { ...state, color: action.payload };
    }
    default:
      return { ...state, visible: false };
  }
};

const setColor = () => {
  return COLORS[Math.floor(Math.random() * 9)];
};
const initialState = {
  visible: true,
  color: "black",
};

const App = () => {
  console.log("render");
  const [state, dispatch] = useReducer(reducer, initialState);
  const textRef = useRef(null);

  const handleToggle = () => {
    dispatch({ type: "toggle" });
  };

  const setRandomColor = () => {
    dispatch({ type: "color", payload: setColor() });
  };

  return (
    <AppContext.Provider value={{ setRandomColor, style, state }}>
      <div ref={textRef} style={style}>
        <button onClick={handleToggle}>Toggle</button>
        {state.visible && <TextComponent />}
      </div>
    </AppContext.Provider>
  );
};

export default App;
