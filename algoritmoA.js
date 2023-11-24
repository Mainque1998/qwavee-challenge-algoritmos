//Descripción: Dado un array de números enteros,
//escribe una función en JavaScript que encuentre la subsecuencia creciente más larga
//(es decir, una secuencia de números que estén en orden creciente,
//pero no necesariamente de forma contigua) en el array.

function functionA(arr)
{
    let arrR = new Array();
    let arrA = new Array(); 

    arrA.push(arr[0]);
    for (let i = 1; i < arr.length; i++)
    {
        if(arr[i-1] >= arr[i]) //Si se terminó la subsecuencia actual
        {
            if(arrA.length > arrR.length) //Si la subsecuencia actual es la más larga
                arrR = arrA;
            arrA = new Array();
        }
        arrA.push(arr[i]);
    }

    if(arrA.length > arrR.length) //Si la última subsecuencia es la más larga
        arrR = arrA;

    return arrR;
}

/*
//Test
let a = functionA([1,2,3,0,1,1,2,1,2,7,9,0,1]);
for(let i=0; i < a.length; i++)
    console.log(a[i]);
*/