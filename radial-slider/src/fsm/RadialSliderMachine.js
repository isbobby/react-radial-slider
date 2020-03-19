// import Xstate
import { Machine } from "xstate";

import {
  updateKnobLocation,
  updateMouseLocation,
  updateTargetTemperature,
  updateMode,
  setTc
} from "./actions";

export const RadialSliderMachine = Machine(
  {
    // Machine identifier
    id: "slider",

    // Initial state
    initial: "operating",

    // local context for the entire machine
    context: {
      amount: 0,
      Tc: 70,
      Tt: 70,
      mode: ["#4C4C4C", "#444444"],
      label: 70,
      radians: 0,
      mousePos: [0, 0],
      knobOffset: [87, -73],
      buffers: {
        dT: 2,
        dTcool: 1.5,
        dTheat: 1
      }
    },

    states: {
      // defines the operating state, which consists of active and sleep input states
      operating: {
        type: "parallel",

        states: {
          background: {
            initial: "operatingMode",
            // define child states under operating state without user input, this should always be updated 
            // so the operating mode is accurate
            states: {
              operatingMode: {
                on: {
                  UPDATE: { target: "operatingMode" },
                  TESTTC: { target: "operatingMode", actions: ["setTc", "updateMode"] }
                }
              }
            }
          },
          foreground: {
            initial: "idle",
            states: {
              idle: {
                on: {
                  ENTER: { target: "hover" },
                  TESTTC: { target: "idle", actions: ["setTc", "updateMode"] }
                }
              },
              hover: {
                on: {
                  DOWN: { target: "hoverArm" },
                  SCROLL: { target: "hover", actions: "changeTcScroll" },
                  LEAVE: { target: "idle" }
                }
              },
              hoverArm: {
                on: {
                  DRAG: {
                    target: "hoverArm",
                    actions: [
                      "updateMouseLocation",
                      "updateKnobLocation",
                      "updateTargetTemperature",
                      "updateMode"
                    ]
                  },
                  LEAVE: "arm",
                  UP: "hover"
                }
              },

              arm: {
                on: {
                  UP: "idle",
                  DRAG: {
                    target: "arm",
                    actions: [
                      "updateMouseLocation",
                      "updateKnobLocation",
                      "updateTargetTemperature",
                      "updateMode"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    }
  },

  {
    actions: {
      updateTargetTemperature, // update Tt base on user input
      updateMouseLocation,  // update mouse x y value when the user press and hold the dial
      updateKnobLocation, // takes in mouse x y value, updates xstate context which is later used
      updateMode, // update operating mode 
      setTc // allows input to set target temperature 
    },

    activities: {
      //
    },
    guards: {
      // conditions, put the temperature checking here
    },
    services: {
      /* ... */
    }
  }
);
