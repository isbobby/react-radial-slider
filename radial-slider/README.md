## Github link 
https://github.com/isbobby/react-radialslider

## File Structure
```
RadialSlider
│   README.md
│   index.html
│   manifest.json
│   README.md
└───build
└───node_modules
└───public
└───src
    │   styles.scss //provides styling
    │   App.js // renders app 
    │
    └───components
        │   radialslider.js // the parent component
        │   dial.js // the dial component
        │   maininterface.js // the main interface
        │   sunicon.js // the sunicon svg
        │   label.js // the testbo component
        │   testbox.js // the testbo component
    │
    └───fsm // contains xstate machine 
        │    //as well as helper functions
        │   actions.js // all the actions to execute 
        │                 during a state are kept here
        │
        │   geomatricFunctions.js // helper function to 
        │                         // calculate geomatry
        │
        │   operatingMode.js // helper function to 
        │                    // determine operating
        │                    // mode
        │
        │   radialslidermachine.js // the xstate FSM 
        │                          // is defined here
```