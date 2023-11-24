//Dado un grafo ponderado y dirigido con nodos y aristas, así como un nodo de inicio,
//escribe una función en JavaScript que encuentre el camino más corto
//desde el nodo de inicio a todos los demás nodos utilizando el algoritmo de Dijkstra.

function min(list, dist)
{
    let minV;
    let minD = Infinity;
    for (let v of list)
        if(dist[v] < minD)
        {
            minV = v;
            minD = dist[v];
        }
    //console.log("Vertice no usado con minima distancia: "+minV);
    return minV;
}

function functionC(graph, o)
{
    //console.log(graph);

    let listV = new Set();
    for(let i = 0; i < graph.length; i++)
    {
        listV.add(i);
    }
    listV.delete(o);

    let dist = new Array();
    let pre = new Array(); 
    for(let i = 0; i < graph.length; i++)
    {
        dist[i] = graph[o][i];
        pre[i] = o;
    }
    //console.log(pre);
    //console.log(dist);

    while (listV.size > 0)
    {
        let actualV = min(listV, dist);
        listV.delete(actualV);
        for(let v = 0; v < graph.length; v++)
            if(listV.has(v))
            {
                if(dist[v] > dist[actualV] + graph[actualV][v])
                {
                    dist[v] = dist[actualV] + graph[actualV][v];
                    pre[v] = actualV;
                    //console.log(pre);
                    //console.log(dist);
                }
            }
    }

    return pre;
}

/*
//Test
const inf = Infinity; //Para los pares de vertices sin arista
let graph = [[0, 10, inf, 30, 100]
        , [inf, 0, 50, inf, inf]
        , [inf, inf, 0, inf, 10]
        , [inf, inf, 20, 0, 60]
        , [inf, inf, inf, inf, 0]]

let o = 0;
let arrP = functionC(graph, o);
console.log("Caminos más cortos desde "+o+": "+arrP);
*/