var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLienzo(color, xinicial, yinicial, xlinea, ylinea){
    lienzo.beginPath();
    lienzo.strokeStyle = (color)
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xlinea, ylinea);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);;
var l = 0;
var yi, xf, y2, x2;
var espacio = ancho / lineas;

while(l < lineas){
    x2 = 350+(10*l+10);
    y2 =350-(10*l+10);
    yi = espacio *l;
    xf = espacio *l+10
    dibujarLienzo("black", 0, yi, xf, 350);
    dibujarLienzo("black", yi, 0, 350, xf);
    dibujarLienzo("black", 350, y2, xf, 350);
    dibujarLienzo("black", y2, 0, 0, xf);
    l = l + 1;
}
}