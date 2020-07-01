import React from "react";

const Box = (props) => {
  return (
    <div>
      {(props.isGreen && (
        <div
          style={{ backgroundColor: "green", height: "100vh", width: "100vh" }}
        ></div>
      )) ||
        (!props.isGreen && (
          <div
            style={{ backgroundColor: "red", height: "100vh", width: "100vh" }}
          ></div>
        ))}
    </div>
  );
};

export default Box;
