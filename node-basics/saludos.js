function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo (){
    return "¡Hola mundo!";    
}
// module.exports.saludar = saludar;//Con este comando hacemos global el modulo para exportarlo  
// module.exports.saludarHolaMundo = saludarHolaMundo;

//Otra manera de exportar
module.exports = {
    saludar:saludar,
    saludarHolaMundo: saludarHolaMundo
};