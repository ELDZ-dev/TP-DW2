let nombreProducto = prompt(`¿Que vas a querer comprar?`);
let precioUnitario = Number(prompt(`¿Cuanto vas a pagar por esto?`));
let cantidadDeseada = Number(prompt(`¿Cuanto vas a querer?`));
let precioFinal = Number(cantidadDeseada * precioUnitario)
console.log(`compraste ${cantidadDeseada} ${nombreProducto}${cantidadDeseada > 1 ? 's' : ''} y su precio es ${precioFinal - (cantidadDeseada >= 5 ? precioFinal * 0.1 : 0)}`);
