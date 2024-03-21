
var img4 = document.querySelector('.img-4 img');

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "1854");
svg.setAttribute("height", "1508");
svg.setAttribute("viewBox", "0 0 1854 1508");

var gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
gradient.setAttribute("id", "gradient"); 
gradient.setAttribute("x1", "0%");
gradient.setAttribute("y1", "0%");
gradient.setAttribute("x2", "100%");
gradient.setAttribute("y2", "100%");


var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("offset", "0%");
stop1.setAttribute("stop-color", "var(--color-top)");
var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("offset", "100%");
stop2.setAttribute("stop-color", "var(--color-bot)");

gradient.appendChild(stop1);
gradient.appendChild(stop2);

svg.appendChild(gradient);
var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M1663 695.002C1818.5 814.002 1901 1033.5 1825 1119C1776.5 1213.7 1606 1231 1535 1231C1427.5 1231 1261 1291.5 1181.5 1359.5C1102 1427.5 957.5 1516 836.5 1507C695.5 1496.51 711 1456 656 1351C601 1246 503.885 1140.1 412 1073.5C320.116 1006.9 61.5952 810.55 21.5002 737.502C-18.5949 664.455 -2 447.5 82.5003 395.283C157 335.001 678.568 360.783 790.5 335.001C902.432 310.294 1297 46.2836 1422 17.502C2017 -119.498 1553 610.822 1663 695.002Z");
path.setAttribute("fill", "url(#grad)"); 

svg.appendChild(path);
img4.parentNode.insertBefore(svg, img4.nextSibling);
