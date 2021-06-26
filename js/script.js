// ------------------create letters array-----------------------
// -------------------------------------------------------------
let letters=[];
for(let i = 65; i <= 90;i++){
    letters.push(String.fromCharCode(i));
}
for(let i = 0;i<10;i++){
    letters.push(i);
}

//-------------coding Header Animation-------------------
// ------------------------------------------------------
let coding = document.querySelectorAll('.head-text span');

function codingAnimation(letterIdx){
    // generate random character-------------------------
    let idx = Math.floor(Math.random() * 10) + 1;

    // set animation interval-----------------------------
    let id = setInterval(function(){
         coding[letterIdx].classList.remove('coding');
         coding[letterIdx].innerText = letters[idx];
         idx = (idx + 1) % letters.length;
    },50);

    // --------clear intervals of respective element--------
    if(letterIdx == 0){
        clearAnimation(id,"C",1500,0);
    }
    if(letterIdx == 1){ 
        clearAnimation(id,"O",2000,1);
    }   
    if(letterIdx == 2){
        clearAnimation(id,"D",2500,2);
    }
    if(letterIdx == 3){
        clearAnimation(id,"I",3000,3);
    }
    if(letterIdx == 4){
        clearAnimation(id,"N",3500,4);
    }
    if(letterIdx == 5){
        clearAnimation(id,"G",4000,5);
    }
}

// -------------------Stop-Animation-------------------
// ----------------------------------------------------
function clearAnimation(id, character, time, letterIdx){  
    setTimeout(function(){
        clearInterval(id);
        coding[letterIdx].innerText = character;
        coding[letterIdx].classList.add('coding');
    },time); 
}

// --------------------Initailly--------------------------
// --------------------------------------------------------
document.addEventListener('DOMContentLoaded',function(e){
    for(let i = 0;i < coding.length; i++){
        codingAnimation(i);
     }
     setInterval(function(){
         for(let i = 0;i < coding.length; i++){
            codingAnimation(i);
         }
     },6000);
})


//--------------------construct array-------------------------
let arr = [];
for(let i = 0;i < 10; i++){
    arr.push(Math.floor(Math.random() * 100));
}

let selectedAlgo;

let cardBtns = document.querySelectorAll('.algo-card-content button');

for(let i = 0 ; i < cardBtns.length; i++){
    console.log(cardBtns[i].getAttribute('data-type'));
    let goTourl = cardBtns[i].getAttribute('data-type');
    cardBtns[i].addEventListener('click', function(){

        selectedAlgo = cardBtns[i].getAttribute('data-type');
        localStorage.setItem('selectedAlgo',selectedAlgo);

        if(i < 5)
           window.location.assign(`Sort.html`);
        else{
           window.location.assign(`grid.html`);
        }
    })
}

// // animate on scroll library
AOS.init();




