// Functions

//a

function suma(a,b){
    return console.log(a+b);
}


//b  A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
//   mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function suma(a,b){
    function validacion(a,b){
        if (isNaN(a)||isNaN(b)){
            alert('Uno de los parametros tiene error');
            if(isNaN(a)){
                alert(a);
            }else{
                alert(b);
            }
        }
    }
    return console.log(a+b);
}

//c Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateinteger(num1){
    return Number.isInteger(num1)
}

//d   A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
//    En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function validar(a,b){
    if(Number.isInteger(a)){
    }else{
        alert('Error');
        alert(Math.round(a));
    }
    if(Number.isInteger(b)){
    }else{
        alert('Error');
        alert(Math.round(b));
    }
}

//e   Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma
//    probando que todo siga funcionando igual.

function validacion(a,b){
    if (isNaN(a)||isNaN(b)){
        alert('Uno de los parametros tiene error');
        if(isNaN(a)){
            alert(a);
        }else{
            alert(b);
        }
    }
}

function suma(a,b){
    validacion(a,b);
    return console.log(a+b);
}

