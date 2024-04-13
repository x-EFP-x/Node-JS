const http = require('http');

const servidor = http.createServer((req, res)=>{
    res.end('Hola mundo');
});

const puerto=3000;

servidor.listen(puerto,() =>{
    console.log(`Escuchando en el puerto ${puerto}`);
});// se debe correr con nodemon en command prompt
//nodemon se usa para hacer los cambios en el server sin necesidad de reiniciarlo