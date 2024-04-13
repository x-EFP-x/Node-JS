const http = require('http');

const servidor = http.createServer((req, res) =>{
    console.log('Nueva Solicitud');
    res.end('Hola mundo');
});//Aquí creamos el servidor y la respuesta que va a dar cuando sea llamado su puerto
const puerto = 3000;// se pueden crear variables con el número de puerto
servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en el puerto http://localhost:${puerto}...` )
});// Aquí hacemos que pueda escuchar, el primer parametro es 
//el número de puerto, el 3000 en este caso

