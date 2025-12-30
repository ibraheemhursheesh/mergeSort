function mergeSort(array, start, end) {
  // start is the index of the first element in the current range of the array being processed.
  // end is the index of the last element in this range.
  if (end === start) return;

  // The goal here is to split the array into two halves.
  const midpoint = Math.floor((end + start) / 2);

  // The first call sorts the left half, which includes all elements from start to midpoint.
  mergeSort(array, start, midpoint);

  // The second call sorts the right half, which starts at midpoint + 1 and ends at end.
  mergeSort(array, midpoint + 1, end);

  merge(array, start, midpoint, end);
}

function merge(array, start, midpoint, end) {
  // start = 0
  // midpoint = 3
  // end = 7

  // calculates the number of elements in the left half
  /*
            The + 1 is necessary because the range is inclusive of both start and midpoint.
            Example: If start = 0 and midpoint = 2, the left half includes indices 0, 1, 2,
            which totals 3 elements. Without + 1, the length would be incorrectly calculated
            as 2.
        */
  const leftLength = midpoint - start + 1;

  // calculates the number of elements in the right half
  const rightLength = end - midpoint;

  const leftArray = new Array(leftLength);
  const rightArray = new Array(rightLength);

  for (let i = 0; i < leftLength; i++) {
    leftArray[i] = array[start + i];
  }

  for (let j = 0; j < rightLength; j++) {
    rightArray[j] = array[midpoint + 1 + j];
  }

  // * k represents the index in the original array (array) where the
  // merged values from the leftArray and rightArray are being written.

  // * The merged portion of the array starts at the same index as the
  // original left half (start).

  // * By initializing k = start, you ensure that the merged result replaces
  // the corresponding portion of the original array.
  let i = 0,
    j = 0,
    k = start;
  // [8, 5]
  while (i < leftLength && j < rightLength) {
    // [ 15, 16, 17, 18 ]
    // [ 11, 12, 13, 14 ]
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftLength) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightLength) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}

let arr = [18, 17, 16, 15, 14, 13, 12, 11];
arr = [6, 32, 12, 8, 78, 165, 59, 5, 1];
console.log("arr before sort", arr);

mergeSort(arr, 0, arr.length - 1);
console.log("arr sorted", arr);
