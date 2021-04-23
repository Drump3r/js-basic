var estudiantes = ["Maria", "Pedro", "Daniel", "Kenny"];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

//Example #1
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

//Example #2
for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}