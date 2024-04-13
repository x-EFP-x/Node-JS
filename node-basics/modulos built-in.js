//---modulo console
console.log('¡hola!');//para imprimir
console.warn('Ocurrio un eror');//De advertencia
console.error(new Error('¡Ocurrio un error!'));
//---modulo timers
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
//---moduloTimers
setTimeout(mostrarTema, 1000, "node.js");//Es un cronometro para ejecutar una función
//setTimeout(Nombre de la función, retraso ( en milisegundos), argumentos necesarios para la función)
setImmediate(mostrarTema, "node.js");//Hace  que la funcion se ejecute inmediatamente después
//del codigo sincrono 
setInterval(mostrarTema, 1000, "node.js")//se usa para ejecutar un ciclo infinitamente después de un retraso
//---Modulo fs

