//Loops: For y For...of
var estudiantes = ["Maria", "Pedro", "Daniel", "Kenny"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

//Example #1
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//Example #2
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}


//Loops: While
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}


/********* Recorriendo Arrays con .find(), .forEach() y .some() */

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Libro", costo: 320},
    {nombre: "Tv", costo: 2500},
    {nombre: "Celular", costo: 10000},
    {nombre: "Lapto", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

console.log(encuentraArticulo);

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);