function wait(time){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve()}, time)
    })
}
async function insertionSort(arr){

    // sorted array
    bars[0].style.backgroundColor = '#60a3bc'

    for(let i = 1; i < arr.length; i++){
        
        let ptr = i;
        let j = i - 1;

        // element to insert in sorted array
        bars[ptr].style.backgroundColor = "blue";

        while(j >= 0 && arr[j] > arr[ptr]){
  
            bars[j].style.backgroundColor = "tomato";

            let temp = arr[ptr];
            arr[ptr] = arr[j];
            arr[j] = temp;

            await wait(intervalSpeed);
            bars[ptr].style.height = `${arr[ptr]}%`;
            bars[j].style.height = `${arr[j]}%`;

            bars[ptr].style.backgroundColor = "#60a3bc";

            bars[j].style.backgroundColor = "#60a3bc";

            ptr = j;

            bars[ptr].style.backgroundColor = "blue";

            j--;

        }
        await wait(intervalSpeed);
        // sorted element
         bars[i].style.backgroundColor = `#60a3bc`;
         bars[ptr].style.backgroundColor = "#60a3bc";

    }
    bars[arr.length-1].style.backgroundColor = '#60a3bc'
}


// console.log(arr);
