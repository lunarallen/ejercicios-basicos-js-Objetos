const alumno = {
    nombre: 'Luna',
    edad: 14,
    materia: {
        ingles: 7,
        programacion: 4,
        html: 5,
},

promedioNotas: function(){
    const promedio = ((this.materia.ingles + this.materia.programacion + this.materia.html)/3);
    console.log(`el promedio de ${this.nombre} es ${this.promedio}`); 
}
}

alumno.promedioNotas();