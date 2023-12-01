//Crear una función Node JS que permita obtener el camino más corto entre dos nodos usando Dijkstra

//Complejidad de O(n) siendo n la cantidad de vertices,
//la misma se debe al reduce que itera sobre todos los vertices de list
function min(list, dist)
{
    return list.reduce(function(min, actual){
        if(dist.get(actual) < min)
            return actual;
        return min;
    }, Infinity);
}

//Complejidad de O(nxn) siendo n la cantidad de vertices
//Esto se debe al principio donde se carga el grafo de mapas de mapas,
//donde el peor caso es que esten todos los vertices conectados
//siendo dos recorridos anidados de complejidad O(n).
//Luego ocurre algo parecido cuando se itera con el while,
//donde por cada iteración se tiene un map O(n) y un min O(n),
//pero esto no supera la complejidad de O(nxn)
function dijkstra(graphObj, o){
    let graph = new Map (Object.entries(graphObj).map(function(v){
        let adys = new Map( Object.entries(v[1]).map(function(ady){
            return [ady[0], ady[1]];
        }) );
        return [v[0], adys];
    }) );
    
    console.log("Grafo hecho con Maps:")
    console.log(graph);
    console.log(graph.get('A').get('B'));

    let listV = Object.entries(graphObj).map(function(v){return v[0]});
    listV = listV.filter(function(v){return (v!=o)});
    console.log("Vertices (sin origen): \n"+ listV);

    let pre = new Map(); 
    let cost = 0;
    let dist = new Map( listV.map(function(v){
        pre.set(v, o);
        cost = graph.get(o).get(v);
        if(cost == undefined)
            cost = Infinity;
        return [v, cost];
    }) );

    console.log("Predecesores cargados: ");
    console.log(pre);
    console.log("Costes cargados: ");
    console.log(dist);

    while (listV.length > 0)
    {
        let actualV = min(listV, dist);
        console.log("Nuevo vertice con coste minimo: "+ actualV);

        listV = listV.filter(function(v){return (v!=actualV)});

        listV.map(function(v){
            let distActual = dist.get(actualV) + graph.get(actualV).get(v);
            if(dist.get(v) > distActual)
            {
                dist.set(v, distActual);
                pre.set(v, actualV);

                console.log(pre);
                console.log(dist);
            }
        });
    }

    return pre;
}

//Complejidad de O(nxn) siendo n la cantidad de vertices
//debido a la función dijkstra.
function caminoMasCorto(graph, o, d){
    p = dijkstra(graph, o);
    let arrR = new Array();
    arrR.push(d);
    let prev = d;
    while(prev != o){
        prev = p.get(prev);
        arrR.push(prev);
    }
    return arrR.reverse();
}

const grafo = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
  }; 

console.log("Camino más corto desde B a D: " + caminoMasCorto(grafo, "B", "D"));