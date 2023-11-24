//Descripción: Dado un array de números enteros y un valor objetivo,
//escribe una función en JavaScript que encuentre un subconjunto de números del array
//cuya suma sea igual al valor objetivo.

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function getSubArrWithSum(arr, i, sum)
{
    if(arr[i] < sum)
    {
        let arrR = new Array();
        while (arr[i] < sum)
        {
            arrR= getSubArrWithSum(arr, i+1, sum - arr[i]);
            if(arrR != null)
            {
                arrR.push(arr[i]);
                return arrR;
            }
            i++;
        }
    }
    
    if(arr[i] == sum)
        return [arr[i]];
    
    return null; //Si no se logró encontrar la suma adecuada
}

function functionB(arr, target)
{
    arr.sort(compareNumeric);
    return getSubArrWithSum(arr, 0, target);
}

/*
//Test
let a = functionB([16, 7, 5, 15, 55, 21, 40, 20], 44);
if(a != null)
    for(let i=0; i < a.length; i++)
        console.log(a[i]);
else
    console.log("No se pudo encontrar un subconjunto que cumpla la condición");
*/