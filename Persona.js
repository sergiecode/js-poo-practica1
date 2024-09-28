
// Clase: es una plantilla 
class Persona {

    // Constructor: es un método especial que permite instanciar objetos basándose en la clase
    constructor(nombre, edad, profesion) {
        // Propiedad o características
        // this hace refencia a la PERSONA que estamos instanciando
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
   

}

// De esta forma estamos instanciando un objeto basado en la clase (plantilla)
const carolina = new Persona("Carolina", 35, "Astronauta")
const ricardo = new Persona("Ricardo", 18, "Estudiante de Programación")


// GET : obtención de datos
console.log(carolina.edad)
console.log(ricardo.profesion)

// SET: cambiar la información
carolina.edad = 45
ricardo.profesion = "Estudiante de Artes"

console.log(carolina.edad)
console.log(ricardo.profesion)