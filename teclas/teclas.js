var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado)

var cuadrito = document.getElementById("area")
var papel = cuadrito.getContext("2d")
var x = 400;
var y = 150;

dibujarLienzo("red", 149, 149, 151, 151, papel);

function dibujarLienzo(color, xinicial, yinicial, xlinea, ylinea, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = (color)
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xlinea, ylinea);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var colorcito = "black";
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
        dibujarLienzo(colorcito, x, y, x, y - movimiento, papel);
        y = y -movimiento;
        break;
        case teclas.DOWN:
            dibujarLienzo(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLienzo(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLienzo(colorcito, x, y, x + movimiento, y, papel);
            x = x  + movimiento;
        break;
        default:
            console.log("otra tecla");
            break;
    }
}