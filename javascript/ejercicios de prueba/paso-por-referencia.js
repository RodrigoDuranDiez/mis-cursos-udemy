// Paso por referencia JS
// Objetos (array) se pasan por referencia

function cambiarValor(parametro){
    parametro[0] = 21;
}

// Llamamos a la función
let arreglo = [32];
console.log(`Antes funcion: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despues funcion: ${arreglo[0]}`)