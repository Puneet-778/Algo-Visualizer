class Pair{
    constructor(row, col, dist, path){
        this.row = row;
        this.col = col;
        this.dist = dist;
        this.path = path;
    }
}

async function bfs(arr, srcRow, srcCol){
    let q = [];
    q.unshift(new Pair(srcRow, srcCol, 0,`row-${srcRow}-col-${srcCol}`));
    // visited
    // arr[9][9] = 1;

    // direction
    let dir = [[-1,0],[0,-1],[1,0],[0,1]];

    while(q.length != 0){
        
        let size = q.length;

        while(size-- > 0){

            let temp = q.pop();
            // console.log(temp);

            let row = temp.row;
            let col = temp.col;

            if(row == srcRow && col == srcCol){
                // do nothing
            }else{
               document.querySelector(`#row-${row}-col-${col}`).style.backgroundColor = "rgba(96, 163, 188, 0.7";

            }

            for(let i = 0;i < dir.length;i++){
                
                let r = temp.row + dir[i][0];
                let c = temp.col + dir[i][1];

                if(r < 0 || c < 0 || r == arr.length || c == arr[0].length || arr[r][c] == 1 || arr[r][c] == -1){
                    continue;
                }


                // --------------------------target found----------------------------------------------
                // ------------------------------------------------------------------------------------
                if(arr[r][c] == 2){
                    // console.log(temp.path);
                    let path = temp.path;
                    let pathArr = path.split(" ");
                    for(let i = 0;i < pathArr.length;i++){
                        if(i == 0){
                            //  document.querySelector(`#${pathArr[i]}`).style.backgroundColor = '#00cec9'
                             continue
                        }
                        await wait(100);

                        document.querySelector(`#${pathArr[i]}`).style.backgroundColor = '#fdcb6e'
                    }
                    console.log(pathArr)
                    return;
                }
                // ------------------------------------------------------------------------------------
                // --------------------------------------------------------------------------------------
    
                await wait(50);
    
                let block = document.querySelector(`#row-${r}-col-${c}`);
                // console.log(block)
                block.style.backgroundColor = 'rgb(56, 201, 152, 0.7)';
    
                arr[r][c] = 1;
                
                q.unshift(new Pair(r,c,temp.dist+1, temp.path +` row-${r}-col-${c}`));
            }
            // await wait(500);
        }
    }
}


// visualBtn.addEventListener('click',function(){
//     bfs(graph, srcRow, srcCol);
//  })
// 