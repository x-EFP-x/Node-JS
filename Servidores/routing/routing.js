const http = require('http');
const path = require('path');
const cursos = require('./cursos')// los simbolos ./ indican que el archivo está 
// dentro de la misma carpeta que el que lo requiere

const servidor = http.createServer((req, res) => {
    const {method}=req;
    switch(method){
        case 'GET':
            return manejarSolicitugGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            console.log(`El metodo no puede ser manejado por el servidor: ${method}`);
    }
});

function manejarSolicitugGET(req,res){
    const path = req.url;

    if(path ==='/'){
        //res.writeHead(200, {'content-Type': 'aplication/jason'});//Así se configuran los valores de statusCode
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    }else if (path === '/cursos'){
        res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion'){
        res.statusCode= 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else if (path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }

    res.statusCode = 404;
    return res.end('el recurso solicitado no existe');
}

function manejarSolicitudPOST (req, res){
    const path=req.url;
    if (path === '/cursos/programacion'){

        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            //Convertir a un objeto de javascript
            cuerpo = JSON.parse(cuerpo);

            console.log(typeof cuerpo);
            console.group(cuerpo.titulo);

            return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
        });

        //return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    }
}
const PUERTO=3000; 

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
});