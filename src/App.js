import React, { useState } from "react";
import "./style.css";
import Box from "./Box";

const App = (props) => {
  const [green, setGreen] = useState(false);
  return (
    <div>
      {/* <h1>Hello</h1>
      <h1>HelloHello</h1>
      <h1>HelloHelloHello</h1>
      <h1>HelloHelloHelloHello</h1> */}

      <div className="wrapper">
        <Box isGreen={green} style={{ width: 50, height: 50 }} />
      </div>
      <div className="button" style={{ padding: "0px" }}>
        <button
          onClick={(event) => {
            event.preventDefault();
            setGreen(!green);
          }}
          style={{ backgroundColor: "red", color: "white", padding: "10px" }}
        >
          PRESS
        </button>
      </div>
      <div className="message">
        {(!green && <p style={{ display: "none" }}>You clicked button</p>) ||
          (green && <p style={{ display: "block" }}>You clicked button</p>)}
      </div>
    </div>
  );
};

export default App;
