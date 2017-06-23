var a, b, c;
var aa = 1, bb = 745.7, cc = 735.5;
function convert(power) {
    "use strict";
    if (power === "W") {
        a = document.getElementById("a").value;
        b = +a / bb;
        c = +a / cc;
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
    } else if (power === "HP") {
        b = document.getElementById("b").value;
        a = +b * bb;
        c = +b * (bb / cc);
        a = document.getElementById("a").value = parseFloat(a).toFixed(4);
        c = document.getElementById("c").value = parseFloat(c).toFixed(4);
    } else {
        c = document.getElementById("c").value;
        a = +c * cc;
        b = +c * (cc / bb);
        a = document.getElementById("a").value = parseFloat(a).toFixed(4);
        b = document.getElementById("b").value = parseFloat(b).toFixed(4);
    }
}