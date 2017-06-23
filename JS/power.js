var a, b, c, d, e, f, g, h, i, j, k, l;
var aa = 1, bb = 0.293071, cc = 4.1868, dd = 0.0000001, ee = 9809.5, ff = 736, gg = 746, hh = 745.69987158227022, ii = 735.49875, jj = 3504, kk = 3938.875, ll = 3516.853;
function convert(heat) {
    "use strict";
    switch (true) {
    case (heat === "W"):
        a = document.getElementById("a").value;
        b = +a * (aa / bb);
        c = +a * (aa / cc);
        d = +a * (aa / dd);
        e = +a * (aa / ee);
        f = +a * (aa / ff);
        g = +a * (aa / gg);
        h = +a * (aa / hh);
        i = +a * (aa / ii);
        j = +a * (aa / jj);
        k = +a * (aa / kk);
        l = +a * (aa / ll);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "B"):
        b = document.getElementById("b").value;
        a = +b / bb;
        c = +b * (bb / cc);
        d = +b * (bb / dd);
        e = +b * (bb / ee);
        f = +b * (bb / ff);
        g = +b * (bb / gg);
        h = +b * (bb / hh);
        i = +b * (bb / ii);
        j = +b * (bb / jj);
        k = +b * (bb / kk);
        l = +b * (bb / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "C"):
        c = document.getElementById("c").value;
        a = +c / cc;
        b = +c * (cc / bb);
        d = +c * (cc / dd);
        e = +c * (cc / ee);
        f = +c * (cc / ff);
        g = +c * (cc / gg);
        h = +c * (cc / hh);
        i = +c * (cc / ii);
        j = +c * (cc / jj);
        k = +c * (cc / kk);
        l = +c * (cc / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "E"):
        d = document.getElementById("d").value;
        a = +d / dd;
        b = +d * (dd / bb);
        c = +d * (dd / cc);
        e = +d * (dd / ee);
        f = +d * (dd / ff);
        g = +d * (dd / gg);
        h = +d * (dd / hh);
        i = +d * (dd / ii);
        j = +d * (dd / jj);
        k = +d * (dd / kk);
        l = +d * (dd / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "HPB"):
        e = document.getElementById("e").value;
        a = +e / ee;
        b = +e * (ee / bb);
        c = +e * (ee / cc);
        d = +e * (ee / dd);
        f = +e * (ee / ff);
        g = +e * (ee / gg);
        h = +e * (ee / hh);
        i = +e * (ee / ii);
        j = +e * (ee / jj);
        k = +e * (ee / kk);
        l = +e * (ee / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "HPEE"):
        f = document.getElementById("f").value;
        a = +f / ff;
        b = +f * (ff / bb);
        c = +f * (ff / cc);
        d = +f * (ff / dd);
        e = +f * (ff / ee);
        g = +f * (ff / gg);
        h = +f * (ff / hh);
        i = +f * (ff / ii);
        j = +f * (ff / jj);
        k = +f * (ff / kk);
        l = +f * (ff / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "HPE"):
        g = document.getElementById("g").value;
        a = +g / gg;
        b = +g * (gg / bb);
        c = +g * (gg / cc);
        d = +g * (gg / dd);
        e = +g * (gg / ee);
        f = +g * (gg / ff);
        h = +g * (gg / hh);
        i = +g * (gg / ii);
        j = +g * (gg / jj);
        k = +g * (gg / kk);
        l = +g * (gg / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "HPM"):
        h = document.getElementById("h").value;
        a = +h / hh;
        b = +h * (hh / bb);
        c = +h * (hh / cc);
        d = +h * (hh / dd);
        e = +h * (hh / ee);
        f = +h * (hh / ff);
        g = +h * (hh / gg);
        i = +h * (hh / ii);
        j = +h * (hh / jj);
        k = +h * (hh / kk);
        l = +h * (hh / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "HPMT"):
        i = document.getElementById("i").value;
        a = +i / ii;
        b = +i * (ii / bb);
        c = +i * (ii / cc);
        d = +i * (ii / dd);
        e = +i * (ii / ee);
        f = +i * (ii / ff);
        g = +i * (ii / gg);
        h = +i * (ii / hh);
        j = +i * (ii / jj);
        k = +i * (ii / kk);
        l = +i * (ii / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "TR"):
        j = document.getElementById("j").value;
        a = +j / jj;
        b = +j * (jj / bb);
        c = +j * (jj / cc);
        d = +j * (jj / dd);
        e = +j * (jj / ee);
        f = +j * (jj / ff);
        g = +j * (jj / gg);
        h = +j * (jj / hh);
        i = +j * (jj / ii);
        k = +j * (jj / kk);
        l = +j * (jj / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "TRI"):
        k = document.getElementById("k").value;
        a = +k / kk;
        b = +k * (kk / bb);
        c = +k * (kk / cc);
        d = +k * (kk / dd);
        e = +k * (kk / ee);
        f = +k * (kk / ff);
        g = +k * (kk / gg);
        h = +k * (kk / hh);
        i = +k * (kk / ii);
        j = +k * (kk / jj);
        l = +k * (kk / ll);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("l").value = parseFloat(l).toFixed(4);
        break;
    case (heat === "TRS"):
        l = document.getElementById("l").value;
        a = +l / ll;
        b = +l * (ll / bb);
        c = +l * (ll / cc);
        d = +l * (ll / dd);
        e = +l * (ll / ee);
        f = +l * (ll / ff);
        g = +l * (ll / gg);
        h = +l * (ll / hh);
        i = +l * (ll / ii);
        j = +l * (ll / jj);
        k = +l * (ll / kk);
        document.getElementById("a").value = parseFloat(a).toFixed(4);
        document.getElementById("b").value = parseFloat(b).toFixed(4);
        document.getElementById("c").value = parseFloat(c).toFixed(4);
        document.getElementById("d").value = parseFloat(d).toFixed(4);
        document.getElementById("e").value = parseFloat(e).toFixed(4);
        document.getElementById("f").value = parseFloat(f).toFixed(4);
        document.getElementById("g").value = parseFloat(g).toFixed(4);
        document.getElementById("h").value = parseFloat(h).toFixed(4);
        document.getElementById("i").value = parseFloat(i).toFixed(4);
        document.getElementById("j").value = parseFloat(j).toFixed(4);
        document.getElementById("k").value = parseFloat(k).toFixed(4);
        break;
    }
}