import React from "react";

// import FSM
import { RadialSliderMachine } from "../fsm/RadialSliderMachine";
import { interpret } from "xstate";

// import child components
import Dial from "./dial";
import Label from "./label";
import MainInterface from "./maininterface";
import SunIcon from "./sunicon";

// import Style
import "../styles.scss";
import TestBox from "./testbox";

class RadialSlider extends React.Component {
  state = {
    current: RadialSliderMachine.initialState
  };

  service = interpret(RadialSliderMachine).onTransition(current =>
    this.setState({ current })
  );

  render() {
    const { current } = this.state;
    const { send } = this.service;
    const radialslider_component = (
      <div
        // className="box"
        onMouseMove={e => {
          send("DRAG", { value: [e.screenX, e.screenY] });
        }}
        onMouseUp={e => {
          send("UP");
        }}
      >
        <div className="box">
          <svg width="600" height="600">
            <g>
              <MainInterface current={current} send={send} />
              <Dial current={current} send={send} />
              <Label current={current} />
              <SunIcon />
            </g>
          </svg>
          <TestBox send={send} />
        </div>
      </div>
    );
    return radialslider_component;
  }

  componentDidMount() {
    this.service.start();
  }

  componentWillUnmount() {
    this.service.stop();
  }
}

export default RadialSlider;
