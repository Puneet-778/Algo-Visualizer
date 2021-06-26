// waiting function----------------------------------------------------------------
function wait(time) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, time);
  });
  return promise;
}

async function merge(arr, l, m, r) {

  bars[l].style.backgroundColor = `tomato`;
  bars[r].style.backgroundColor = `tomato`;

  // await wait(500);

  let leftarr = [];
  let rightarr = [];

  // size of left array
  let n1 = m - l + 1;

  //  size of right array
  let n2 = r - m;

  let idx1 = 0;

  //  filling left array
  let idx2 = l;
  while (idx2 <= m) {
    leftarr.push(arr[idx2]);
    idx2++;
  }

  //  filling right array
  idx2 = m + 1;
  while (idx2 <= r) {
    rightarr.push(arr[idx2]);
    idx2++;
  }

  idx2 = 0;

  let idx3 = l;

  //  placing sorted elements in main array
  while (idx1 < n1 && idx2 < n2) {
    if (leftarr[idx1] < rightarr[idx2]) {
      arr[idx3] = leftarr[idx1];
      idx1++;
      idx3++;
    } else {
      arr[idx3] = rightarr[idx2];
      idx2++;
      idx3++;
    }
  }

  while (idx1 < n1) {
    arr[idx3] = leftarr[idx1];
    idx1++;
    idx3++;
  }

  while (idx2 < n2) {
    arr[idx3] = rightarr[idx2];
    idx2++;
    idx3++;
  }

  // await wait(500);

  for (let i = l; i <= r; i++) {
    await wait(200);
    bars[i].style.height = `${arr[i]}%`;
    bars[i].style.backgroundColor = `#60a3bc`;
  }

}

async function mergeSort(arr, l, r) {
  //code here
  if (l < r) {

    let mid = Math.floor((l + r) / 2);

    await mergeSort(arr, l, mid);
    await mergeSort(arr, mid + 1, r);

    // merge contains waiting part
    await merge(arr, l, mid, r);
  }
}
// mergeSort(arr, 0, arr.length-1)
// console.log(arr);

// sortBtn.addEventListener("click", function () {
//   mergeSort(arr, 0, arr.length - 1);
// });
