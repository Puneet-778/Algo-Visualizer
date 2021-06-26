// swap elements
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

async function bubbleSort(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      bars[j + 1].style.backgroundColor = `tomato`;
      bars[j].style.backgroundColor = `tomato`;

      let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, intervalSpeed/2);
      });

      await promise;

      bars[j + 1].style.backgroundColor = `rgb(56, 201, 152)`;
      bars[j].style.backgroundColor = `rgb(56, 201, 152)`;

      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        bars[j + 1].style.height = `${arr[j + 1]}%`;
        //    bars[j+1].innerText = arr[j+1]
        bars[j].style.height = `${arr[j]}%`;
        //    bars[j].innerText = arr[j]
      }
    }
    bars[arr.length - 1 - i].style.backgroundColor = `#60a3bc`;
  }
  bars[0].style.backgroundColor = `#60a3bc`;
}

// sortBtn.addEventListener('click',function(){
//     bubbleSort(arr);
// })
