// const testArr = [[1, 2], [3, 4, 5, 6], [4, 5], [5, 6], [6], [0, 3], [5]];
const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

const traversalDFS = function (graph) {
  const seen = {0:true};
  const values = [0];

  const DFS =(point,index)=>{
    if(!graph[point]) return
    if(index>=graph[point].length){
     DFS(point+1,0)
     return
    }
    const curVal =graph[point][index]
    if(!seen[curVal]){
        seen[curVal]=true
       values.push(curVal)
    }
    DFS(point,index+1)
  }

  DFS(0,0)

  return values;
};


const traversalDFS2 = function(vertex, graph, values, seen) {
    values.push(vertex);
    seen[vertex] = true;
  
    const connections = graph[vertex];
    for(let i = 0; i < connections.length; i++) {
      const connection = connections[i];
  
      if(!seen[connection]) {
        traversalDFS2(connection, graph, values, seen);
      }
    }
  }
  const values =[]
  traversalDFS2(0, adjacencyList, values, {})
  console.log(values)