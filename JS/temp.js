var f, c, k;
function convert(degree) {
    "use strict";
    if (degree === "C") {
        c = document.getElementById("c").value;
        f = +c * 9 / 5 + 32;
        document.getElementById("f").value = f;
        k = +c + 273.15;
        document.getElementById("k").value = parseFloat(k).toFixed(2);
    } else if (degree === "F") {
        f = document.getElementById("f").value;
        c = (f - 32) * 5 / 9;
        k = (f - 459.67) * 5 / 9;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        document.getElementById("k").value = parseFloat(k).toFixed(2);
    } else {
        k = document.getElementById("k").value;
        c = k - 273.15;
        f = (k * 9 / 5) - 459.67;
        document.getElementById("c").value = c;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
    }
}