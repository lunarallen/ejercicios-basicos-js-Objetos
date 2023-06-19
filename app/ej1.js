const persona = {
    nombre: 'Luna',
    apellido: 'Cubillos',
    edad: 26,
    email: 'anul.nellar@gmail.com',
    direccion: 'apóstol ',
    mostrarInfo: function (){
        console.log(`El nombre de la persona es${this.nombre}, el apellido es ${this.apellido}, su edad es ${this.edad}, su email ${this.email}, su dirección es ${this.direccion} `);
    }
}

persona.mostrarInfo();

const nomb = persona.nombre;
console.log(nomb);

const { nombre, apellido, edad, email, direccion } = persona;

console.log(`El nombre ${nombre}, apellido ${apellido}, ${edad}, ${email}, ${direccion}`);
