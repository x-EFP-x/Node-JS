const EventEmitter = require('events');

const emisorProductos = new EventEmitter();//Se crea un emisor de eventos

emisorProductos.on('compra', (total) =>{ //Se pueden poner parametros a ls funciones flecha, o no
    console.log('se realizó una compra');
    console.log(`Total de la compra: $${total}`);
});//Se crea el evento

emisorProductos.emit('compra', 5000);//Se emite el evento