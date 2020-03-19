import React from "react";
// import Style
import "../styles.scss";

export default function Label(props) {
  const [current] = [props.current];
  const label_component = (
    <svg>
      <text
        fill="#ffffff"
        fontSize="60"
        fontWeight="bold"
        fontFamily="Verdana"
        x="260"
        y="300"
      >
        {current.context.Tt}
      </text>

      <text
        fill="#ffffff"
        fontSize="24"
        fontWeight="bold"
        fontFamily="Arial"
        x="237"
        y="345"
      >
        Current: {current.context.Tc}
      </text>
    </svg>
  );
  return label_component;
}
