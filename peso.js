var usuario = "cual es tu peso"
var planeta1 = marte
var peso = parseInt(usuario)
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
var nombre;

const result = (peso, planeta) => {
    let planeta = peso * g_marte / g_tierra;
    return resultado
}
function calcularpeso() {
if(planeta == marte)
{
    peso_final = peso * g_marte / g_tierra;
    nombre = "marte"
}else if(planeta == 2)
{
    peso_final = peso * g_jupiter / g_tierra;
    nombre = "jupiter"
}
else{
    peso_final = 1000000;
    nombre = "el planeta que imaginaste"
}
}
peso_final = parseInt(peso_final)
document.write("Tu peso en " + nombre +  + peso_final + " kilos");
