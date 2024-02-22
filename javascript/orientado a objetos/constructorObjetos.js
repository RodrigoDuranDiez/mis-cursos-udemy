//Funcion constructor de objetos de tipo Persona

function Persona(nombre , apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona ('Juan', 'Perez', 'jperez@gmail.com');
console.log(padre)
console.log(padre.nombreCompleto()); 
let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com');
console.log(madre);
// let persona = {
//     nombre: ' Juan ' , 
//     apellido: 'Perez',
//     email: 'jperez@gmail.com',
//     edad: '28',
//     idioma: 'es',
//     get lang(){
//         return this.idioma.toUpperCase();
//     },

//     set lang(lang){
//         this.idioma = lang.toUpperCase();
//     },
//     get nombreCompleto(){
//         return this.nombre + ' ' + this.apellido;
//     }

// }

// console.log(persona.nombreCompleto);