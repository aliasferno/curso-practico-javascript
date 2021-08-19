//Calcular el perímetro de un cuadrado
console.group("Cuadrado"); //Este comando nos permite agrupar mensajes en consola
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function permiteroCuadrado(lado){

    return lado * 4;

}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){

    return lado * lado;
}
console.groupEnd(); //Siemore que agrupemos mensajes en consola, debemos establecer un final con el groupEnd.

//Código del triángulo

// console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );
function perimetroTriangulo (lado1, lado2, base){

    return lado1 + lado2 + base;

}

function areaTriangulo (base, altura){

    return (base * altura) / 2;

}
console.groupEnd();

//Código del círculo

console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + " cm" );

//Diámetro
function diametroCirculo (radio){

    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("Nuestro PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){

    const diametro = diametroCirculo(radio);

    return diametro * PI;
}

//Área círculo
function areaCirculo(radio){

    return (radio*radio) * PI;
}

console.groupEnd();

//Aquí conectamos con el HTML

function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = permiteroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
    
}

function calcularPerimetroTriangulo(){

    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const inputLadoBase = document.getElementById("inputTrianguloBase");    
    const valueLado1 = parseFloat(inputLado1.value);
    const valueLado2 = parseFloat(inputLado2.value);
    const valueLadoBase = parseFloat(inputLadoBase.value);
    const perimetroTr = perimetroTriangulo(valueLado1, valueLado2, valueLadoBase);

    alert(perimetroTr);
}

function calcularAreaTriangulo(){

   const inputLadoBase = document.getElementById("inputTrianguloBase");
   const inputLadoAltura = document.getElementById("inputTrianguloAltura");
   const valueLadoBase = parseFloat(inputLadoBase.value);
   const valueLadoAltura = parseFloat(inputLadoAltura.value);

   const areaTr = areaTriangulo(valueLadoBase, valueLadoAltura);

   alert(areaTr);

}

function calcularAreaCirculo(){

    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = parseFloat(inputRadio.value);
    const areaCir = areaCirculo(valueRadio);

    alert(areaCir);
}

function calcularDiametroCirculo(){

    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = parseFloat(inputRadio.value);
    const diametroCir = diametroCirculo(valueRadio);

    alert(diametroCir);
}

function calcularPerimetroCirculo(){

    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = parseFloat(inputRadio.value);
    const perimetroCir = perimetroCirculo(valueRadio);

    alert(perimetroCir);
}

function validarIsoceles(){

    const inputLadoI1 = document.getElementById("inputtrianguloIsoceles1");
    const inputLadoI2 = document.getElementById("inputtrianguloIsoceles2");
    const inputLadoI3 = document.getElementById("inputtrianguloIsoceles3");

    switch(true){
        case parseFloat(inputLadoI1.value) === parseFloat(inputLadoI2.value) || parseFloat(inputLadoI1.value) === parseFloat(inputLadoI3.value) || parseFloat(inputLadoI2.value) === parseFloat(inputLadoI3.value):
            alert("Felicidades, si eres un isóceles");
            break;
        default:
            alert("Lo siento, no eres un isóceles");
            
    }

function alturaIsoceles(){

    const hipotenusa = document.getElementById("inputtrianguloIsoceles1");
    const valueHipotenusa = parseFloat(hipotenusa.value);
    const cateto1 = document.getElementById("inputtrianguloIsoceles2");
    const valueCateto1 = parseFloat(cateto1.value)

    const altura = Math.sqrt((valueHipotenusa * valueHipotenusa) - ((valueCateto1 * valueCateto1) / 4));

    alert("La altura de tu isóceles es: " + altura);

}


}