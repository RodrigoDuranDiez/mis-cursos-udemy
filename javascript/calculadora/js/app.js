console.log('aplicación calculadora')

function sumar(){
    let forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value) ;
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números'
        console.log(resultado);
    }else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    }
 
}