function wait(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, time);
  });
}

async function quickSort(arr, lo, hi) {
  if (lo > hi) {
    return;
  }
  //selecting pivot element
  let pivot = arr[hi];
  // changing color of pivot
  bars[hi].style.backgroundColor = "blue";

  let pivotIdx = await partition(arr, pivot, lo, hi);

  bars[pivotIdx].style.backgroundColor = "#60a3bc";

  await quickSort(arr, lo, pivotIdx - 1);

  await quickSort(arr, pivotIdx + 1, hi);
}

// after this the pivot element is sorted
async function partition(arr, pivot, lo, hi) {
  let i = lo;
  let j = lo;
  while (i <= hi) {
    // show comparision-------------------
  bars[i].style.backgroundColor = "tomato";
//   bars[j].style.backgroundColor = "tomato";
  await wait(intervalSpeed);
  bars[i].style.backgroundColor = "rgb(56, 201, 152)";
 
    // ------------------------------------
    if (arr[i] > pivot) {
      i++;
    } else {

      swapQ(arr, i, j);
      // change height--------------------
      await wait(intervalSpeed/2);

      bars[i].style.height = `${arr[i]}%`;
      bars[j].style.height = `${arr[j]}%`;

      i++;
      j++;
    }
  }
  
  return j - 1;
}

function swapQ(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// console.log(arr);

