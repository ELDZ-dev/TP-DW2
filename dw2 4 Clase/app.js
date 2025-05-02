const sumarProductos = (precio, cantidad) => `precio final es de: $${precio * cantidad}`
let nombreProducto = prompt("¿Que deseas comprar?")
let inputCantidad = prompt("Ingrese cantidad deseada")
console.log(`Gracias por su compra de ${nombreProducto}, su `,sumarProductos(2300,inputCantidad))

