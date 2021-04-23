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