const estatus = () =>{
    const estatus = Math.random() < 0.8;
    return estatus;
};

const PedidoPizza = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (estatus()){
            resolve('Pedido exitoso');
        } else{
            reject('No se procesó su pedido');
        }
    }, 3000);
});

// const manejarPedido = (mensajedeConfirmación) => {
//     console.log(mensajedeConfirmación);
// };

// const rechazaPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };//aquí se crearon las funciones en caso de que sirva o falle el programa


PedidoPizza.then(manejarPedido,rechazaPedido);//aquí se invoca la promesa, primero cuando es efectiva,
//el segundo argumento es cuando falla


///CATCH
PedidoPizza
    .then((mensajedeConfirmación)=>{
        console.log(mensajedeConfirmación);
    })//Con then manejamos el exito
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });//con CATCH procesamos el fallo

//una manera mas precisa de usar CATCH cuando las funciones son mas complejas
//Así definimos las funcines separadamente
const miPedido = ((mensajedeConfirmación)=>{
    console.log(mensajedeConfirmación);
});
const pedidoRechazado = ((mensajeDeError) => {
    console.log(mensajeDeError);
});

miPedido.then(miPedido).catch(pedidoRechazado);