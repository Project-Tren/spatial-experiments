$(document).ready(()=>{
    // do init here
});

window.addEventListener('deviceorientation', (obj)=>{
    $("#heading_raw").html(parseInt(obj.alpha,10));
    $("#heading_to").html(getCardinal(parseInt(obj.alpha,10)));
    $("#door").html(doorWillOpen(getCardinal(parseInt(obj.alpha,10))));
});

function doorWillOpen(d) {
    switch(d) {
        case('S'):
            return 'right';
            break;
        case('SE'):
            return 'front';
            break;
        case('SW'):
            return 'back';
            break;
        case('N'):
            return 'left';
            break;
        case('NE'):
            return 'back';
            break;
        case('NW'):
            return 'front';
            break;
        case('E'):
            return 'back';
            break;
        case('W'):
            return 'front';
            break;
    }
}
function getCardinal(angle) {
    /** 
     * Customize by changing the number of directions you have
     * We have 8
     */
    const degreePerDirection = 360 / 8;
    /** 
     * Offset the angle by half of the degrees per direction
     * Example: in 4 direction system North (320-45) becomes (0-90)
     */
    const offsetAngle = angle + degreePerDirection / 2;
    return (offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? "S"
      : (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? "SW"
        : (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? "E"
          : (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? "NE"
            : (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? "N"
              : (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? "NW"
                : (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? "W"
                  : "SE";
}