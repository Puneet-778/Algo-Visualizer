let arr = [];
let pageLoadedOnce = false;
let barContainer = document.querySelector('.graph-container');
let input = document.querySelector('.input-arr-size');
let generateBtn = document.querySelector('#generate-arr-btn');
let sortBtn = document.querySelector('#sort-btn');
let stopBtn = document.querySelector('#stop-btn');
let selectedNavItem = document.querySelector('.list-item.selected');
let allPages = document.querySelectorAll('.page-nav-item');

function setSpeed(speed = 3){
    if(speed == 5){
        return 20;
    }else if(speed == 4){
        return 100;
    }else if(speed == 3){
        return 150;
    }else if( speed == 2){
        return 400;
    }else if(speed == 1){
        return 600;
    }
}

allPages.forEach(function(el){
    if(el.getAttribute('id') == 'sorting-page'){
        el.classList.add('selected');
    }else{
      el.classList.remove('selected');
    }
})

allPages[1].addEventListener('click',function(){
    localStorage.setItem('selectedAlgo','bfs');
    location.assign('grid.html');
})

// let stop = false;

if(!pageLoadedOnce){
    for(let i = 0;i < 10;i++){
        arr.push(Math.floor(Math.random() * 100)+1);
    }
    generateArr(arr);
    pageLoadedOnce = true;
}
let bars = document.querySelectorAll('.bar'); 
console.log(arr);

//-------------------------generate array on UI------------------------
// --------------------------------------------------------------------
generateBtn.addEventListener('click',function(){
    if(input.value != ""){
        let temp = [];
        emptyUI();
        arr.length = 0;
        for(let i = 0;i < input.value;i++){
           temp.push(Math.floor(Math.random() * 100)+1);
        }
        arr = temp;
        generateArr(arr);
        bars = document.querySelectorAll('.bar'); 
        input.value="";
    }
});
//----------------------------------------------------------------------
// --------------------------------------------------------------------

// --------------------Generates bars-----------------------------------
// ----------------------------------------------------------------------
function generateArr(arr){  
    for(let i = 0; i < arr.length; i++){
        let bar = document.createElement('div');
        bar.setAttribute('id',i);
        bar.style.height = `${arr[i]}%`
        // bar.innerText = parseInt(bar.style.height);
        bar.style.width = `calc(100% / ${arr.length})`
        bar.classList.add('bar');
        barContainer.append(bar);
    }

}

// -----------------------reset------------------------------------------------------
// ----------------------------------------------------------------------------------
stopBtn.addEventListener('click', function(){
    // when button is clicked while the sorting is still in progress
    // ------------------------------------------------------------------------------
    location.reload();
    // window.location.reload(true);
})



function emptyUI(){
    // this funtion will run everytime generate array is called to add new bars to DOM
    // and remove old ones
    bars.forEach(function(el){
        // console.log(el.parentNode);
        // el --> dom element to delete
        //  select its parent and and remove the current child
        el.parentNode.removeChild(el);
    });
}


// ------------------------------locks UI while sorting ------------------------------
// ----------------------------------------------------------------------------------------
function lockUI(){
    document.querySelector('.options').style.pointerEvents = 'none';
    document.querySelector('.options').classList.add('disabled');


    document.querySelector('#generate-arr-btn').style.pointerEvents = 'none';
    document.querySelector('#generate-arr-btn').classList.add('disabled');

    document.querySelector('#sort-btn').style.pointerEvents = 'none';
    document.querySelector('#sort-btn').classList.add('disabled');

}


// ---------------------------------Unlocls UI after sorting isover------------------------------
// -------------------------------------------------------------------------------------------
function enableUI(){
    document.querySelector('.options').style.pointerEvents = 'auto';
    document.querySelector('.options').classList.remove('disabled');

    document.querySelector('#generate-arr-btn').style.pointerEvents = 'auto';
    document.querySelector('#generate-arr-btn').classList.remove('disabled');

    document.querySelector('#sort-btn').style.pointerEvents = 'auto';
    document.querySelector('#sort-btn').classList.remove('disabled');

}



// --------------------------------------Sort-btn is clicked----------------------------------------
// ----------------------------------------------------------------------------------------------

let intervalSpeed;
sortBtn.addEventListener("click", function () {
    lockUI();
    let speedElement = document.querySelector("#speed");

    let speed = speedElement.value;

    intervalSpeed = setSpeed(speed);
    // console.log(speed)
    // console.log(intervalSpeed)

    if (selectedAlgo == "bubble-sort") {
      bubbleSort(arr).then(function(){
          enableUI();
      });
    } else if (selectedAlgo == "selection-sort") {
      selectionSort(arr).then(function(){
          enableUI();
      });
    } else if (selectedAlgo == "merge-sort") {
      mergeSort(arr, 0, arr.length - 1).then(function(){
          enableUI();
      });
    }else if(selectedAlgo == 'quick-sort'){
      quickSort(arr, 0, arr.length - 1).then(function(){
          enableUI();
          console.log(arr);
      });
    }else if(selectedAlgo == 'insertion-sort'){
        insertionSort(arr).then(function(){
            enableUI();
        });
    }
  });


// ---------------------------someother algo from list is chosen-------------------------
let listItems = document.querySelectorAll(".list-item");
// console.log(navElements);

listItems.forEach(function (el) {
  el.addEventListener("click", function () {
    selectedNavItem.classList.remove("selected");
    selectedNavItem = el;
    selectedNavItem.classList.add("selected");
    selectedAlgo = el.getAttribute("id");
    localStorage.setItem('selectedAlgo',selectedAlgo);
  });
  // console.log(selectedAlgo);
});
