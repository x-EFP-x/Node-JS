const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido) =>{
    if (err){
        console.log(err);//se puede usar throw (err) para ver mas detalles del error
    }else{
        console.log(contenido);
    }
});// Se usa para ver el contenido de un archivo (asincrona)

fs.rename('index.html', 'Main.html', () => {
    if(err){
        throw err;
    }
    console.log('Nombre cambiado exitosamente');
});

fs.appendFile('index.html', '<p>hola</p>', (err) =>{
    if(err){
        throw err;
    }
    console.log('Archivo actualizado');
});//Se usa para agregar algo al final de un archivo(archivo, el agregado, el err)
fs.writeFile('index.html', 'Cntenido Nuevo', err =>{
    if (err){
        throw err;
    }
    else{
        console.log('Contenido reemplazado exitosamente');
    }
});//cambia todo lo que hay en un archivo con lo que hay en el segundo argumento

fs.unlink('main.html', (err) => {
    if(err){
        throw err;
    }
    else{
        console.log('Archivo eliminado');
    }
})// Se usa para borrar archivos del disco duro
//Los fs son asincronos 
