const http = require('http');

const servidor = http.createServer((req, res) =>{
    console.log('===> req (solicitud)');
    // console.log(req.url);//aquí imprimimos el camino que está tomando el servidor
    // //Por ejemplo : /freecodecamp/cursos
    // console.log(req.method); //aquí indicamos el método que estamos usando 
    // //(GET, POST, PUT, DELETE, etc...)
    // console.log(req.headers);//Información general del servidor
    console.log(res.statusCode);// 200 = OK 
    res.setHeared('content-type', 'application/json');//Se usa par dar mas información al usuario 
    //(Agregar contenido a la cabecera)
    console.log(res.getHeaders());//Para ver los elementos de la cabecera 

    res.end('Hola mundo')//Esto siempre es necesario, es la respuesta de nuestro servidor
});

const puerto = 3000;
servidor.listen(puerto, () =>{
    console.log(`El servidor está escuchando en el puerto ${puerto}...`);
});