
async function dfs(arr,r, c, psf){
    if(arr[r][c] == 2){
        console.log(psf);
        psf += `row-${r}-col-${c}`
        let pathArr = psf.split(" ");
        for(let i = 0;i < pathArr.length;i++){
            // if(i == 0){
            //      document.querySelector(`#${pathArr[i]}`).style.backgroundColor = '#60a3bc'
            //      continue
            // }
            
            document.querySelector(`#${pathArr[i]}`).style.backgroundColor = '#fdcb6e'
            await wait(30);
        }

        await wait(500);

        // reseting color
        document.querySelector(`#${pathArr[0]}`).style.backgroundColor = '#60a3bc'
        document.querySelector(`#${pathArr[pathArr.length-2]}`).style.backgroundColor = 'tomato'

        return true;
    }
    
    await wait(20);
    if(r == srcRow && c == srcCol){
        //  do nothing
    }else{
        document.querySelector(`#row-${r}-col-${c}`).style.backgroundColor = "rgb(56, 201, 152, 0.7)";
        arr[r][c] = 1;
    }
    
    if(r-1 >= 0 && arr[r-1][c] != 1 && arr[r-1][c] != -1){
        let flag = await dfs(arr, r-1, c, psf+`row-${r-1}-col-${c} `);

        if(flag == true){
            return true;
        }
    }
    if(c+1 < arr[0].length && arr[r][c+1] != 1 && arr[r][c+1] != -1){
        let flag =await dfs(arr, r , c + 1, psf+`row-${r}-col-${c+1} `);
        if(flag == true){
            return true;
        }
    }

    if(r+1 < arr.length && arr[r+1][c] != 1 && arr[r+1][c] != -1){
        let flag =await dfs(arr, r + 1, c, psf+`row-${r+1}-col-${c} `);
        if(flag == true){
            return true;
        }
    }
    if(c-1 >= 0 && arr[r][c-1] != 1 && arr[r][c-1] != -1){
        let flag =await dfs(arr, r, c - 1, psf+`row-${r}-col-${c-1} `);
        if(flag == true){
            return true;
        }
    }

    return false;

}

// visualBtn.addEventListener('click',function(){
//    dfs(graph, srcRow, srcCol ,`row-${srcRow}-col-${srcCol} `);
// })
// dfs(graph, srcRow, srcCol ,``);
// console.log(graph);