const lista1 =[
   1,
   2,
   3,
   4,
   2,
   2,
   2,
   1,
   3,
   4,
   2,
   14,

];





function calcularModaAritmetica(lista1){

    let lista1Count = {};

    lista1.map( 
        function(elemento){
    
            if(lista1Count[elemento]){
    
                lista1Count[elemento] += 1;
    
            } else {
    
                lista1Count[elemento] = 1;
    
            }
            
    
    });

    let lista1Array = Object.entries(lista1Count).sort(
        function(elementoa, elementob){
        
        return elementoa[1] - elementob[1];
        }
    
    ); //A object.entries le podemos mandar como argumento el objeto el cual queremos convertir en array.
    
    const moda = lista1Array[lista1Array.length - 1];

    return moda;

}
