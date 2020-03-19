/**
 * takes in the x and y position of the mouse and return the ratio and quadrant
 * of knob. Ratio = rise/run
 * @param {x coordinate of mouse} x
 * @param {y coordinate of mouse} y
 */
export function calRadian(x, y) {
  // thermostat has absolute coordinates for now, can be dynamic
  const xc = 300;
  const yc = 420;
  const threshold = 1.3;
  const thresholdRad = Math.atan(threshold)

  var dx = x - xc;
  var dy = y - yc;

  var ratio = dy / dx;
  var radians;
  // 4th quad
  if (dx > 0 && dy < 0) {
    ratio = -(dy / dx);
    radians =  Math.atan(ratio);
    return [radians, 4];
  } // 3rd quad
  else if (dx < 0 && dy < 0) {
    dx = -1 * dx;
    ratio = (dy / dx);
    radians =  Math.atan(ratio);
    return [radians, 3];
  } // 2nd quad
  else if (dx < 0 && dy > 0) {
    ratio = -(dy / dx);
    radians =  Math.atan(ratio);
    if (ratio > threshold){
        return ([thresholdRad, 2])
    }else{
        return ([radians, 2])
    }
  } // 1st quad
  else {
    ratio = dy / dx;
    radians =  Math.atan(ratio);
    if (ratio > threshold) {
      return [thresholdRad, 1];
    } else {
      return [radians, 1];
    }
  }
}

export function calKnobPos(radians, quadrant) {
  const radius = 115;
  var knob_x, knob_y;
  knob_x = radius * Math.cos(radians);

  knob_y = radius * Math.sin(radians);

  if (quadrant === 1) {

    return [knob_x, knob_y];
  } else if (quadrant === 2) {

    return [-knob_x, knob_y];
  } else if (quadrant === 3) {

    return [-knob_x, knob_y];
  } else {

    return [knob_x, -knob_y];
  }
}

export function calTt(radians,quadrant){
    var temp
    const gap = 0.65569
    const half_pi = 1.57079632679
    const upper_bound = 4.9717 
    var current

    if(quadrant === 1){
        current = (3 * half_pi) + radians - gap 
        temp = (current/upper_bound * 30) + 50
    }
    else if(quadrant === 2){
        current = half_pi - gap - radians
        temp = (current/upper_bound * 30) + 50
    }
    else if(quadrant === 3){
        current = half_pi - gap - radians
        temp = (current/upper_bound * 30) + 50
    }else{
        current = (3 * half_pi ) - gap - radians 
        temp = (current/upper_bound * 30) + 50
    }
    return Math.round(temp);
}