
// Clase: es una plantilla 
class Animal {

    // Constructor: es un método especial que permite instanciar objetos basándose en la clase
    constructor(nombre, edad, especie, sonido) {
        // Propiedad o características
        // this hace refencia a la PERSONA que estamos instanciando
        this.nombre = nombre
        this.edad = edad
        this.especie = especie
        this.sonido = sonido
    }

    // Método: es una función que representa un comportamiento propio de esta clase

    hacerSonido(){
        console.log(this.sonido)
    }

    decirNombre(){
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
   

}


const manchita = new Animal("Manchita", 1, "Perro", "Guau")
const pelusa = new Animal("Pelusa", 2, "Gato", "Miau")

manchita.decirNombre()
pelusa.decirNombre()