
function esPar(numero){

    if(numero % 2 === 0){

        return true;

    } else {

        return false;
    }

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

function calcularMedianaAritmetica(lista){

    lista.sort(function(a,b)
    {
        return a - b;
    }
    );

    const mitadLista = parseInt(lista.length / 2);
    let mediana;

    if(esPar(lista.length)){

        const elementoa = lista[mitadLista - 1];
        const elementob = lista[mitadLista];

        const promedioElementos = calcularMediaAritmetica([elementoa, elementob]);

        mediana = promedioElementos;

        return mediana;

    } else {

        mediana = lista[mitadLista];

        return mediana;
    }

}