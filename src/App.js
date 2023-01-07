import React from "react";
import WindowTracker from "./WindowTracker";
import './App.css';

export default function App() {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow(prevShow => !prevShow);
  }

  return (
    <div className="container">
      <button className="toggle--btn" onClick={toggle}>{show ? "Hide" : "Show"} WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
