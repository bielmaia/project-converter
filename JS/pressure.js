var a, b, c, d, e, f, g;
function convert(pressure) {
    "use strict";
    if (pressure === "A") {
        a = document.getElementById("a").value;
        b = +a * (1 / 101.3);
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +a * 0.1;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = +a * 0.0101972;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = +a * 0.01;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = +a * 0.1450377;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = +a * 7.5006151;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
    } else if (pressure === "B") {
        b = document.getElementById("b").value;
        a = +b * 101.325;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        c = +b * 10.1325;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = +b * 1.0332275;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = +b * 1.01325;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = +b * 14.6959494;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = +b * 760;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
    } else if (pressure === "C") {
        c = document.getElementById("c").value;
        a = +c * 10;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = +c * 0.0986923;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        d = +c * 0.1019716;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = +c * 0.1;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = +c * 1.4503774;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = +c * 75.0061505;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
    } else if (pressure === "D") {
        d = document.getElementById("d").value;
        a = +d * 98.0665;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = +d * 0.9678411;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +d * 9.80665;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        e = +d * 0.980665;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = +d * 14.2233439;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = +d * 735.5590658;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
    } else if (pressure === "E") {
        e = document.getElementById("e").value;
        a = +e * 100;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = +e * 0.9869233;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +e * 10;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = +e * 1.0197162;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        f = +e * 14.5037744;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = +e * 750.061505;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
    } else if (pressure === "F") {
        f = document.getElementById("f").value;
        a = +f * 6.894757;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = +f * 0.068046;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +f * 0.6894757;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = +f * 0.070307;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = +f * 0.0689476;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        g = +f * 51.7149181;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
    } else {
        g = document.getElementById("g").value;
        a = +g * 0.1333224;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = +g * 0.0013158;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +g * 0.0133322;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = +g * 0.0013595;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = +g * 0.0013332;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = +g * 0.0193368;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
    }
}