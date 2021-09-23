//Funciones Helpers o Utils

function esPar(numero){

    return (numero % 2 === 0);

}

function calcularMediaAritmetica(lista){

    
    const sumaLista = lista.reduce(                            
        function(valorAcumulado = 0, nuevoElemento) {
            
            return valorAcumulado + nuevoElemento;

        }

    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}
//Calculadora de medianas

function medianaSalarios(lista){

    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {

        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;


    } else {

        const personaMitad = lista[mitad];
        return personaMitad;
    }

}

//Calculando Mediana General

const salariosCol = colombia.map(

    function(persona){

        return persona.salary;

    }
);

const salariosColSorted = salariosCol.sort(

    function(salaryA, salaryB){

        return salaryA - salaryB;

    }

);




const medianaGeneralCol = medianaSalarios(salariosColSorted)


//Mediana del top 10%


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(

    spliceStart,
    spliceCount,

);

const  medianaTop10Col = medianaSalarios(salariosColTop10); //Este metodo recibe dos argumentos, el primero donde hacer el corte es donde tu le digas
                                                    //El segundo argumento es cuantos elementos quiero traer del array
console.log(

{
    medianaGeneralCol,
    medianaTop10Col,


}

);