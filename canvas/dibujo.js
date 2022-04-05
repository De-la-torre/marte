var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 50;
var l = 0;
var yi, xf, y2;
while(l < lineas){
    y2 = 500-(10*l+10);
    yi = 10*l;
    xf = 10*l+10
    dibujarLienzo("black", 0, yi, xf, 500);
    dibujarLienzo("black", yi, 0, 500, xf);
    dibujarLienzo("black", 500, y2, xf, 500);
    dibujarLienzo("black", y2, 0, 0, xf);
    l = l + 1;
}

function dibujarLienzo(color, xinicial, yinicial, xlinea, ylinea){
    lienzo.beginPath();
    lienzo.strokeStyle = (color)
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xlinea, ylinea);
    lienzo.stroke();
    lienzo.closePath();
}