//Crear una función Node JS que permite obtener objetos con el formato 
//[{ id, nombre, salario}, …];
//en una línea de código

//El siguiente método tiene un complejidad de O(n), siendo n el tamaño de array
//Debido a que map itera sobre todos los elementos del arreglo
function obtenerIdNombreSalario(array){
    return array.map(function(u){
        return {id: u.id , nombre: u.nombre, salario: u.salario};
    });
} 

const usuarios = [
    { id: 1, nombre: 'Ana', edad: 28, ciudad: 'Ciudad A', categoria: 'Desarrollador', antiguedad: 3, salario: 60000 },
    { id: 2, nombre: 'Juan', edad: 35, ciudad: 'Ciudad B', categoria: 'Diseñador', antiguedad: 2, salario: 55000 },
    { id: 3, nombre: 'María', edad: 22, ciudad: 'Ciudad A', categoria: 'Analista', antiguedad: 1, salario: 50000 },
    { id: 4, nombre: 'Carlos', edad: 40, ciudad: 'Ciudad C', categoria: 'Desarrollador', antiguedad: 5, salario: 70000 },
    { id: 5, nombre: 'Laura', edad: 32, ciudad: 'Ciudad B', categoria: 'Gerente', antiguedad: 4, salario: 80000 },
    { id: 6, nombre: 'Pedro', edad: 28, ciudad: 'Ciudad C', categoria: 'Analista', antiguedad: 2, salario: 55000 },
    { id: 7, nombre: 'Carmen', edad: 45, ciudad: 'Ciudad A', categoria: 'Diseñador', antiguedad: 7, salario: 90000 },
    { id: 8, nombre: 'Javier', edad: 29, ciudad: 'Ciudad B', categoria: 'Desarrollador', antiguedad: 3, salario: 65000 },
    { id: 9, nombre: 'Sofía', edad: 33, ciudad: 'Ciudad C', categoria: 'Gerente', antiguedad: 6, salario: 85000 },
    { id: 10, nombre: 'Miguel', edad: 25, ciudad: 'Ciudad A', categoria: 'Analista', antiguedad: 1, salario: 50000 }
  ];
  
  console.log(obtenerIdNombreSalario(usuarios));