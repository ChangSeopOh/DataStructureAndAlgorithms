class Graph {
//Undirected graph 
//round trips

    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        //if vertex already exists then not make new one.
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdges(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdges(vertex1, vertex2){

//          for(let temp in this.adjacencyList[vertex1]){
//              if(this.adjacencyList[vertex1][temp] ===vertex2){
//                  this.adjacencyList[vertex1].splice(temp,1);
//              }
//          }
//          for(let temp in this.adjacencyList[vertex2]){
//              if(this.adjacencyList[vertex2][temp] ===vertex1){
//                  this.adjacencyList[vertex2].splice(temp,1);
//              }
//          }
             
         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
               temp => temp !== vertex2
         )     
         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
               temp => temp !== vertex1
         )

         //example
         //result = words.filter(word => word.length > 6);
 
          
    }

    removeVertex(vertex){
        for(let key of this.adjacencyList[vertex]){
            this.removeEdges(key, vertex);
        };
        
       delete this.adjacencyList[vertex];


    }



}

var graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addEdges("Tokyo", "Dallas")
graph.addEdges("Tokyo", "Aspen")
graph.addEdges("Dallas", "Aspen")