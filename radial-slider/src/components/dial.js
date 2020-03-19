import React from "react";

// import Style
import "../styles.scss";

export default function Dial(props) {
  const [current, send] = [props.current, props.send];
  const dial_component = (
    <svg>
      <circle
        cx={300 + current.context.knobOffset[0]}
        cy={300 + current.context.knobOffset[1]}
        r="20"
        fill="#A0A0A0"
        onMouseDown={e => {
          send("DOWN");
        }}
        onMouseOver={e => {
          send("ENTER");
        }}
      ></circle>

      <circle
        cx={300 + current.context.knobOffset[0]}
        cy={300 + current.context.knobOffset[1]}
        r="15"
        fill="#F0F0F0"
        onMouseDown={e => {
          send("DOWN");
        }}
        onMouseOver={e => {
          send("ENTER");
        }}
      ></circle>
    </svg>
  );
  return dial_component;
}
