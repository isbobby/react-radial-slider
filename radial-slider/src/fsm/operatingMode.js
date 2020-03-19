/**
 * 
 * @param {Target} Tt 
 * @param {Current} Tc 
 */
export function decideMode(Tt, Tc){
    const dT = 2
    const dTCool = 1.5
    const dTHeat = 1
    if (Tc > Tt + dT + dTCool){
        return ["#71bcd4","#3a9fbf"]
    } else if ( Tc < Tt - dT - dTHeat){
        return ["#FF4500","#ff6a33"]
    }else{
        return ["#4C4C4C","#444444"]
    }
}