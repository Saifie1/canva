import React, { Component } from "react";
import { render } from "react-dom";

import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

const imageUrl2 = "https://source.unsplash.com/random";
const imageUrl3 = "https://source.unsplash.com/user/erondu/1600x900";
class App extends React.Component {
  render = () => (
    <>
      <Draggable>
        <Resizable
          defaultSize={{
            width: 100,
            height: 160,
          }}
          style={{
            position: "absolute",
            margin: "45px",
            top: "60px",
            left: "0px",
            background: `url(${imageUrl2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          lockAspectRatio={true}
        ></Resizable>
      </Draggable>
      <Draggable>
        <Resizable
          defaultSize={{
            width: 100,
            height: 160,
          }}
          style={{
            position: "absolute",
            top: "60px",
            left: "70px",
            margin: "45px",
            background: `url(${imageUrl3})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          lockAspectRatio={true}
        ></Resizable>
      </Draggable>
    </>
  );
}

export default App;
