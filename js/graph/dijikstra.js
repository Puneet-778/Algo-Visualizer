for(let i = 0;i < graph.length;i++){
    for(let j = 0;j < graph[0].length;j++){
        if(i == srcRow && j == srcCol){
            document.querySelector(`#row-${i}-col-${j}`).innerText = 0;
        }else{
            let randomWeight = Math.floor(Math.random()*100 + 1);
            document.querySelector(`#row-${i}-col-${j}`).innerText = randomWeight;
        }

    }
}

class Pair2{

    constructor(r, c, wt){
        this.r = r;
        this.c = c;
        this.wt = wt;
    }

    // comparator = (this, o)=>{
    //     return this.wt - o.wt;
    // }
}
function dijikstra(graph){
    let pq = new PriorityQueue();

    let weight = document.querySelector(`#row-${srcRow}-col-${srcCol}`).innerText;

    pq.add(new Pair2(srcRow, srcCol, parseInt(weight)));
    
    while(pq.size() != 0){

        let selectedPair = pq.dequeue();
        console.log(selectedPair)

        // if already chosen and there exists a shorter path
        if(graph[selectedPair][selectedPair] == 1){
            continue;
        }

        // mark visited
        graph[selectedPair.r][selectedPair.c] = 1;

        let dir = [[-1,0],[0,-1],[1,0],[0,1]];

        // connected
        for(let i = 0; i < dir.length; i++){

            let r = selectedPair.r + dir[i][0];
            let c = selectedPair.c + dir[i][1];

            if(r < 0 || c < 0 || r == graph.length || c == graph[0].length || graph[r][c] == 1){
                continue;
            }

            let updatedWeight = parseInt(selectedPair.wt) + parseInt(document.querySelector(`#row-${r}-col-${c}`).innerText);
            pq.enqueue(new Pair2(r, c, updatedWeight));

        }

    }
}

dijikstra(graph);