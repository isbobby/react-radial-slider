import React from "react";
// import Style
import "../styles.scss";

export default function MainInterface(props) {
  const [current, send] = [props.current, props.send];
  const maininterface_component = (
    <svg>
      <defs>
        <linearGradient
          x1=".258%"
          y1="49.75%"
          x2="101.258%"
          y2="49.75%"
          id="tempGradient"
        >
          <stop offset="0%" stopColor="#3a9fbf" />
          <stop offset="100%" stopColor="#FF4500" />
        </linearGradient>

        <linearGradient
          x1=".258%"
          y1="0%"
          x2="0%"
          y2="49.75%"
          id="dialGradient"
        >
          <stop offset="0%" stopColor={current.context.mode[0]} />
          <stop offset="46%" stopColor={current.context.mode[0]} />
          <stop offset="100%" stopColor={current.context.mode[1]} />
        </linearGradient>
      </defs>
      <circle
        cx="300"
        cy="300"
        r="150"
        stroke="#eeeeee"
        strokeWidth="4"
        fill="#eeeeee"
      />
      <circle
        cx="300"
        cy="300"
        r="140"
        stroke="#ffffff"
        strokeWidth="4"
        fill="#ffffff"
        onMouseLeave={e => {
          send("LEAVE");
        }}
      />
      <path
        d=" M 235 413 A 130 130 0 1 1 365 413"
        stroke="url(#tempGradient)"
        strokeWidth="7"
        fillOpacity="0"
        onMouseOver={e => {
          send("ENTER");
        }}
      />
      <path
        d=" M 392 392 A 130 130 285 0 1 208 392"
        stroke="#343434"
        strokeWidth="7"
        fillOpacity="0"
        onMouseOver={e => {
          send("ENTER");
        }}
      />
      <circle
        cx="300"
        cy="300"
        r="127"
        strokeWidth="0"
        fill="url(#dialGradient)"
        onMouseOver={e => {
          send("ENTER");
        }}
      />
      <path
        d=" M 244 398 A 113 113 120 1 1 357 398"
        fillOpacity="0"
        className="engravings"
        strokeWidth="25"
        stroke="#ffffff"
      />
    </svg>
  );
  return maininterface_component;
}
