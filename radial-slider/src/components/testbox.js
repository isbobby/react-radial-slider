import React from "react";
// import Style
import "../App";

export default function TestBox(props) {
  const [send] = [props.send];
  const testbox_component = (
    <label>
      <span>Current Temperature:</span>
      <input
        type="range"
        min={32}
        max={100}
        onChange={e => {
          send("TESTTC", { value: e.target.value });
        }}
      />
    </label>
  );
  return testbox_component;
}
