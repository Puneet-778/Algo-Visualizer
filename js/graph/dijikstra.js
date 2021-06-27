class Pair2{

    constructor(r, c, wt,psf){
        this.r = r;
        this.c = c;
        this.wt = wt;
        this.psf = psf;
    }
}


async function dijikstra(graph,srcRow, srcCol){

    let dir = [[-1,0],[0,-1],[1,0],[0,1]];

    let pq = [];

    let weight = document.querySelector(`#row-${srcRow}-col-${srcCol}`).innerText;

    pq.unshift(new Pair2(srcRow, srcCol, parseInt(weight),`row-${srcRow}-col-${srcCol} `));
    // console.log(pq);

    while(pq.length != 0){

        pq.sort(function(a, b){
            return b.wt - a.wt;
        });

        console.log(pq);


        let selectedPair = pq.pop();
        // console.log(selectedPair)

        // if already chosen and there exists a shorter path
        if((selectedPair.r == srcRow && selectedPair.c == srcCol)){
            // do nothing
        }else{
            if( graph[selectedPair.r][selectedPair.c] == 1){
                continue;
            }
        }
        

        // mark visited
        graph[selectedPair.r][selectedPair.c] = 1;


        // connected
        for(let i = 0; i < dir.length; i++){

            let r = selectedPair.r + dir[i][0];
            let c = selectedPair.c + dir[i][1];

            if(r < 0 || c < 0 || r == graph.length || c == graph[0].length || graph[r][c] == 1 || graph[r][c] == -1){
                continue;
            }

            if(graph[r][c] == 2){
                // console.log(selectedPair.psf);
                let path = selectedPair.psf;
                let pathArr = path.split(" ");
                for(let i = 0;i < pathArr.length-1;i++){
                    if(i == 0){
                        //  document.querySelector(`#${pathArr[i]}`).style.backgroundColor = '#00cec9'
                         continue
                    }
                    await wait(100);

                    document.querySelector(`#${pathArr[i]}`).style.backgroundColor = '#fdcb6e'
                }
                return;
            }

            let updatedWeight = parseInt(selectedPair.wt) + parseInt(document.querySelector(`#row-${r}-col-${c}`).innerText);

            pq.push(new Pair2(r, c, updatedWeight,selectedPair.psf+`row-${r}-col-${c} `));

        }

    }
}

// dijikstra(graph);
// console.log(graph);
