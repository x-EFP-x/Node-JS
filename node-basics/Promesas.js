const promesaCumplida  = false;

const miPromesa = new Promise((resolve, reject) => {//los parametros resolvey reject son 
    //asignados automáticamente
    setTimeout(() =>{
        if (promesaCumplida){
            resolve('¡promesa cumplida!');
        }else{
            reject('Promesa rechazada...')
        }
    }, 3000);
});

miPromesa.then((valor) =>{
    console.log(valor);
});//Se usa solo cuando se umple la promesa

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);