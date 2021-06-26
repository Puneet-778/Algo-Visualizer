function swap(i,j,arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;       
}

// waiting function for each animation
// takes waiting time as argument
function wait(time){
    let promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },time)
    })
  return promise;
}

async function selectionSort(arr){

    for(let i  = 0; i < arr.length-1; i++){
        
    
        let minidx = i;
        
        for(let j = i+1; j < arr.length; j++){
            
            // to visualize elements being compared
            bars[i].style.backgroundColor=`tomato`;
            bars[j].style.backgroundColor=`tomato`;

            // if currentidx Element is smaller than minidx
            if(arr[j] < arr[minidx]){
                minidx = j;
            }

            await wait(intervalSpeed);

            // clear comparision color
            bars[j].style.backgroundColor=`rgb(56, 201, 152)`;
        }

        // if minidx is different from i 
        // arr[minidx] is the smallest element
        if(i != minidx){
            // smallest element
           bars[minidx].style.backgroundColor=`tomato`;
           
        // swapping i with the minidx element
           swap(i,minidx,arr);
           
        // waiting
           await wait(2*intervalSpeed);

        // swaping heights to display on UI
           bars[i].style.height=`${arr[i]}%`;
           bars[minidx].style.height=`${arr[minidx]}%`;
           bars[minidx].style.backgroundColor=`rgb(56, 201, 152)`;
        }

        // sorted element marked blue
        bars[i].style.backgroundColor=`#60a3bc`;
        await wait(intervalSpeed);
    }
    // last element marked sorted
    bars[arr.length-1].style.backgroundColor=`#60a3bc`;
}


// calling selection sort on button click
// sortBtn.addEventListener('click',function(){
//     selectionSort(arr);
// });
