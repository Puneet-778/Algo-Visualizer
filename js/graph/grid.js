let grid = document.querySelector('.grid-container');
let selectedNavItem = document.querySelector('.list-item.selected');
let resetBtn = document.querySelector('#reset-btn');
let allPages = document.querySelectorAll('.page-nav-item');

allPages.forEach(function(el){
    if(el.getAttribute('id') == 'graph-page'){
        el.classList.add('selected');
    }else{
      el.classList.remove('selected');
    }
})

allPages[0].addEventListener('click',function(){
    localStorage.setItem('selectedAlgo','bubble-sort');
    location.assign('Sort.html');
})


// grid generation-----------------------------------------
for(let i = 0; i < 20;i++){

    let row = document.createElement('div');

    row.classList.add('row');

    for(let j = 0; j < 20; j++){

        let col = document.createElement('div');
        
        col.classList.add('col');

        col.setAttribute('id',`row-${i}-col-${j}`);
        
        row.appendChild(col);

    }
    grid.appendChild(row);
}

// --------creates weighted graph---------------------------
// -----------------------------------------------------------
function createWeightedGraph(graph) {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (i == srcRow && j == srcCol) {
        document.querySelector(`#row-${i}-col-${j}`).innerText = 0;
      } else {
        let randomWeight = Math.floor(Math.random() * 100 + 1);
        document.querySelector(`#row-${i}-col-${j}`).innerText = randomWeight;
      }
    }
  }
}


// ---------waiting function-------------------------------
function wait(time){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },time);
    })
}

// let graph = [];
// for(let  i = 0; i < 10; i++){
//     for(let j = 0; j < 10; j++){

//     }
// }
// 1 --> source
// 2 destination
// -1 --> wall
// let graph = [[0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,1,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,2]]


let graph = [];

for(let i = 0;i < 20; i++){
    let temp = []
    for(let j = 0; j < 20; j++){
      temp[j] = 0;
   }
   graph.push(temp);
  }
function init(){

    for(let i = 0;i < 20; i++){
        for(let j = 0; j < 20; j++){
            if(graph[i][j] == -1){
                // obstacle
                 document.querySelector(`#row-${i}-col-${j}`).classList.remove('blocked');
            }else if(graph[i][j] == 1){
                // source
                 if( document.querySelector(`#row-${i}-col-${j}`).classList.contains('source-selected') == true){
                     document.querySelector(`#row-${i}-col-${j}`).style.backgroundColor = "";
                     document.querySelector(`#row-${i}-col-${j}`).classList.remove('source-selected');
                }else{
                    document.querySelector(`#row-${i}-col-${j}`).style.backgroundColor = "";
                }
            }else if (graph[i][j] == 2){
                document.querySelector(`#row-${i}-col-${j}`).style.backgroundColor = "";
                document.querySelector(`#row-${i}-col-${j}`).classList.remove('target-selected');
            }
            graph[i][j] = 0;
            // clear weights
            document.querySelector(`#row-${i}-col-${j}`).innerText = "";
       } 
      }
    
    srcRow = 0;
    srcCol = 0;

    destRow = graph.length - 1;
    destCol = graph[0].length - 1;

    document.querySelector(`#row-${0}-col-${0}`).classList.add('source-selected')
    document.querySelector(`#row-${graph.length-1}-col-${graph[0].length-1}`).classList.add('target-selected')

    setSource(srcRow, srcCol);
    setDestination(destRow, destCol)
}

let srcRow ;
let srcCol ;

let destRow;
let destCol;

init();


// source
function setSource(r,c){

    document.querySelector('.source-selected').classList.remove('source-selected');

    let srcElement = document.querySelector(`#row-${r}-col-${c}`);

    srcElement.classList.add('source-selected');
    // srcElement.style.backgroundColor="#60a3bc";
    graph[r][c] = 1;
    srcRow = r;
    srcCol = c;
}

// destinatin
function setDestination(r,c){
    document.querySelector('.target-selected').classList.remove('target-selected');

    let targetElement = document.querySelector(`#row-${r}-col-${c}`);

    targetElement.classList.add('target-selected');
    // targetElement.style.backgroundColor = "tomato";
    graph[r][c] = 2;
    destRow = r;
    destCol = c;
}


let selectingNow;

let srcSelector = document.querySelector('#source');
srcSelector.addEventListener('click', function(e){

    selectingNow = 'source';

    console.log(selectingNow)

})

let destinationSelector = document.querySelector('#destination');
destinationSelector.addEventListener('click', function(e){

    selectingNow = 'target';

    console.log(selectingNow)
})

let obstacleSelector = document.querySelector('#obstacle');
obstacleSelector.addEventListener('click', function(e){

    selectingNow = 'block';

    console.log(selectingNow);
})

let cells = document.querySelectorAll('.col')
// adding click event to the cells for selectiong source and destination

for(let i = 0; i < graph.length * graph[0].length; i++){
    
    cells[i].addEventListener('click', function(e){
        
        if(selectingNow == 'source'){
           
          let id = e.currentTarget.getAttribute('id');
          let idArr= id.split("-");

           newsrcRow = parseInt(idArr[1]);
           newsrcCol = parseInt(idArr[3]);

           if(srcRow == newsrcRow && srcCol == newsrcCol){
            //    do nothing
           }else{
            //    console.log(srcRow, srcCol);
               graph[srcRow][srcCol] = 0;
               setSource(newsrcRow, newsrcCol);
           }

           console.log(graph);


        }else if(selectingNow == 'target'){

            // if target is to be selected by the user-------------
            // -------------------------------------------------------
 
           let id = e.currentTarget.getAttribute('id');
           let idArr= id.split("-");

           newdestRow = parseInt(idArr[1]);
           newdestCol = parseInt(idArr[3]);
            
            
          if (graph[newdestRow][newdestCol] == 0) {
              graph[destRow][destCol] = 0;
              setDestination(newdestRow, newdestCol);
            }

           
//            if(destRow == newdestRow && destCol == newdestCol){
//             //    do nothing
//             //    console.log(newdestRow, newdestCol);
//             //    console.log(destRow, destCol);
//             //    console.log('hello');
//            }else{
//             //    console.log(destRow, destCol)
//             if(graph[newdestCol][newdestCol] == 0){
//                 graph[destRow][destCol] = 0;
//                setDestination(newdestRow, newdestCol);
//             }
//            }

           console.log(graph);
        }else if(selectingNow == 'block'){
           let id = e.currentTarget.getAttribute('id');
           let idArr= id.split("-");

           let blockRow = parseInt(idArr[1]);
           let blockCol = parseInt(idArr[3]);

           let cell = document.querySelector(`#row-${blockRow}-col-${blockCol}`);

           if(graph[blockRow][blockCol] == -1){
               graph[blockRow][blockCol] = 0;
              cell.classList.remove('blocked');
           }else if(graph[blockRow][blockCol] == 0){
               graph[blockRow][blockCol] = -1;
               cell.classList.add('blocked');
           }

//            if(cell.classList.contains('blocked')){
//               graph[blockRow][blockCol] = 0;
//               document.querySelector(`#row-${blockRow}-col-${blockCol}`).classList.remove('blocked');
//            }else{
//               if(graph[blockRow][blockCol] == 0){
//                 graph[blockRow][blockCol] = -1;
//                 document.querySelector(`#row-${blockRow}-col-${blockCol}`).classList.add('blocked');
//               }
//            }
           
        }
    })
}


//--------------------------------------------------------------------
// --------------------------------------------------------------------
let gridVisualBtn = document.querySelector("#visualize-btn");


let listItems = document.querySelectorAll(".list-item");
// console.log(navElements);

listItems.forEach(function (el) {
  el.addEventListener("click", function () {
    selectedNavItem.classList.remove("selected");
    selectedNavItem = el;
    selectedNavItem.classList.add("selected");
    selectedAlgo = el.getAttribute("id");
    console.log(selectedAlgo);
    localStorage.setItem('selectedAlgo',selectedAlgo);
    init();
    if (selectedAlgo == "dijikstra") {
      createWeightedGraph(graph);
    }
    console.log(graph);
  });
});


gridVisualBtn.addEventListener("click", function () {
    lockUI();
    if (selectedAlgo == "dfs") {
      dfs(graph, srcRow, srcCol, `row-${srcRow}-col-${srcCol} `).then(function(){
          enableUI();
      });
    } else if (selectedAlgo == "bfs") {
      bfs(graph, srcRow, srcCol).then(function(){
        enableUI();
      });
    }else if (selectedAlgo == "dijikstra") {
    dijikstra(graph, srcRow, srcCol).then(function () {
      enableUI();
    });
  }
  });


  resetBtn.addEventListener('click', function(){
    location.reload();
  });

  function lockUI(){
    document.querySelector('.options').style.pointerEvents = 'none';
    document.querySelector('.options').classList.add('disabled');


    document.querySelector('#visualize-btn').style.pointerEvents = 'none';
    document.querySelector('#visualize-btn').classList.add('disabled');
}

function enableUI(){
    document.querySelector('.options').style.pointerEvents = 'auto';
    document.querySelector('.options').classList.remove('disabled');

    document.querySelector('#visualize-btn').style.pointerEvents = 'auto';
    document.querySelector('#visualize-btn').classList.remove('disabled');
}


