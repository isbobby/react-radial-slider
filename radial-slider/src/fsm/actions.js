// import Xstate
import { assign } from "xstate";

// import math helpers
import {calRadian, calKnobPos, calTt} from "./geomatricFunctions"

// import operation mode decider
import {decideMode} from "./operatingMode"

// update mouse location from DOM
export const updateMouseLocation = assign({
  mousePos: (_, event) => event.value
});

// update knob location using mouse location
export const updateKnobLocation = assign({
  knobOffset : (context, _) => calKnobPos((calRadian(context.mousePos[0], context.mousePos[1]))[0], (calRadian(context.mousePos[0], context.mousePos[1]))[1] )
});

// update temperature using mouse position 
export const updateTargetTemperature = assign({
  Tt : (context, _) => calTt((calRadian(context.mousePos[0], context.mousePos[1]))[0], (calRadian(context.mousePos[0], context.mousePos[1]))[1] )
});

// update the operating mode base on tt and tc
export const updateMode = assign({
  mode : (context, _) => decideMode(context.Tt, context.Tc)
})

// test action
export const setTc = assign({
  Tc : (_, event) => event.value
})



