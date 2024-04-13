//async await
function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de Edwin`);
        setTimeout(() => {
            if (producto === 'taza'){
                resolve('Ordenando una taza de Edwin');
            }
            else {
                reject('Este producto no esta disponible');
            }
        }, 2000)
    });
}

function procesarPedido(respuesta){
    return new Promise((resolve) => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(() => {
            resolve('Gracias por la compra, disfrutalo');
        }, 4000);
    },);
}

///////Hacer un orden espacifico (Encadenando)

///PRIMER METODO
ordenarProducto('taza')
    .then(respuesta => {
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);//se retorna la  segunda funcion para darle el orden
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch (error => {
        console.log(error);//Si tenemos un argumento que nos de error inmediatamente iremos a catch
    });//cada función toma como argumento lo que retorna la anterior
///SEGUNDO METODO
    async function realizarPedido(producto){
        try {
            const respuesta = await ordenarProducto(producto);//await obliga a que espere que se ejecute una 
            //parte de código para avanzar, se debe hacer con   promesas
            console.log('Respuesta recibida');
            const respuestaProcesada  = await procesarPedido(respuesta);
            console.log(respuestaProcesada);
        } catch(error){
            console.log(error);
        }
    }

    realizarPedido('taza');