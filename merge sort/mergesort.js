const mergeSort = (arr) => {
    if (arr.length === 1)
    {
      return [arr[0]]
    }
    else if (arr.length === 2)
    {
      return arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]]
    }
  
    const middle = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle))

    let sortedArr = []
    let leftIndex = 0
    let rightIndex = 0
  
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
          sortedArr.push(left[leftIndex]);
          leftIndex++;
        } else {
          sortedArr.push(right[rightIndex]);
          rightIndex++;
        }
      }
    
      // Append remaining elements from either left or right array
      sortedArr.push(...left.slice(leftIndex));
      sortedArr.push(...right.slice(rightIndex));
    
      return sortedArr;
}

console.log(mergeSort([1, 6, 2, 2, 10, 4, 3, 53, 32]))
  