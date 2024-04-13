let infoCurso = {
    "titulo":"Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "Javascript",
        "Node.js"
    ],
    "esPublico": true
};

//Cadena de caracteres en formato JSON

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//Cadena de caracteres -> Objeto
//Con la función parse(objeto), hacemos que el archivo json se vuelva un objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto)