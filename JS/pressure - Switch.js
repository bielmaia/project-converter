var a, b, c, d, e, f, g;
function convert(pressure) {
    "use strict";
    switch (true) {
    case (pressure === "A"):
        a = document.getElementById("a").value;
        b = +a * 101292;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +a;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = +a * 14.7;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = +a * 10.33;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = +a * 1.033;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = +a * 760;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
        break;
    case (pressure === "B"):
        b = document.getElementById("b").value;
        a = +b / 101292;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        c = +b / 101292;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = (+b * 14.7) / 101292;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = (+b * 10.33) / 101292;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = (+b * 1.033) / 101292;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = (+b * 760) / 101292;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
        break;
    case (pressure === "C"):
        c = document.getElementById("c").value;
        a = +c;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = +c * 101292;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        d = +c * 14.7;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = +c * 10.33;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = +c * 1.033;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = +c * 760;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
        break;
    case (pressure === "D"):
        d = document.getElementById("d").value;
        a = +d / 14.7;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = (+d * 101292) / 14.7;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +d / 14.7;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        e = (+d * 10.33) / 14.7;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = (+d * 1.033) / 14.7;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = (+d * 760) / 14.7;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
        break;
    case (pressure === "E"):
        e = document.getElementById("e").value;
        a = +e / 10.33;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = (+e * 101292) / 10.33;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +e / 10.33;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = (+e * 14.7) / 10.33;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        f = (+e * 1.033) / 10.33;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        g = (+e * 760) / 10.33;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
        break;
    case (pressure === "F"):
        f = document.getElementById("f").value;
        a = +f / 1.033;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = (+f * 101292) / 1.033;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +f / 1.033;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = (+f * 14.7) / 1.033;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = (+f * 10.33) / 1.033;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        g = (+f * 760) / 1.033;
        document.getElementById("g").value = parseFloat(g).toFixed(2);
        break;
    case (pressure === "G"):
        g = document.getElementById("g").value;
        a = +g / 760;
        document.getElementById("a").value = parseFloat(a).toFixed(2);
        b = (+g * 101292) / 760;
        document.getElementById("b").value = parseFloat(b).toFixed(2);
        c = +g / 760;
        document.getElementById("c").value = parseFloat(c).toFixed(2);
        d = (+g * 14.7) / 760;
        document.getElementById("d").value = parseFloat(d).toFixed(2);
        e = (+g * 10.33) / 760;
        document.getElementById("e").value = parseFloat(e).toFixed(2);
        f = (+g * 1.033) / 760;
        document.getElementById("f").value = parseFloat(f).toFixed(2);
        break;
    }
}