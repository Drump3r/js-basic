var frutas= ["Peach", "Apple", "Banana", "Pear"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);

console.log(frutas[2]);

var masFrutas = frutas.push("Uvas"); //Agrega elemento al final y devuelve el nuelo length del array

frutas.pop("Uvas"); //Remueve el elemento del Array y devuelve el nuevo length del array

frutas.unshift("Uvas"); //Agrega elemento 

frutas.shift("Uvas");

frutas.indexOf("Uvas");

//*******Métodos de recorridos de Arrays */

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Libro", costo: 320},
    {nombre: "Tv", costo: 2500},
    {nombre: "Celular", costo: 10000},
    {nombre: "Lapto", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
