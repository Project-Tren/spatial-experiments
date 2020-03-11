$(document).ready(()=>{
    // do init here
});

window.addEventListener('deviceorientation', (obj)=>{
    $("#heading_raw").html(parseInt(obj.alpha,3));
    $("#heading_to").html(headingTo(parseInt(obj.alpha,3)));
});

function headingTo(i) {
    /*
    if(i > 180.00) {
        return 'south';
    } else {
        return 'north';
    }*/
    if(i > 180) {
        $("#block").html('less 180');
        if(i > 90) {
            return 'south';
        } else {
            return 'east';
        }
    } else {
        $("#block").html('greater 180');
        if(i > 250) {
            return 'north';
        } else {
            return 'west';
        }
    }
}
