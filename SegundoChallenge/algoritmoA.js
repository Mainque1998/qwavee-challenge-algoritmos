//Escribe una función en Node.js que tome como entrada un array de números
//y devuelva un nuevo array que contenga solo los elementos únicos, eliminando cualquier duplicado.
//Asegúrate de que el orden de los elementos en el nuevo array sea el mismo que en el array original.

//El siguiente método tiene un complejidad de O(nxn), siendo n el tamaño de array
//Debido a que se recorre todo el arreglo con reduce O(n)
//y en cada iteración se aplica indexOf, que en el peor de los casos es O(n)
function eliminarDuplicados(array) {
    return array.reduce( function(result, actual){
        if(result.indexOf(actual) == -1)
        {
            result.push(actual);
            console.log("El elemento "+actual+" se agrega al arreglo: "+result);
        }else{
            console.log("El elemento "+actual+" ya está en el arreglo.");
        }
        return result;
    }, [])
}

//const arrayOriginal = [4, 2, 9, 8, 0, 2, 6, 1, 1, 0, 7, 8, 3];
const arrayOriginal = [1, 2, 3, 4, 2, 5, 6, 7, 8, 1];
const resultado = eliminarDuplicados(arrayOriginal);
console.log(resultado); // Debería imprimir: [1, 2, 3, 4, 5, 6, 7, 8]
  