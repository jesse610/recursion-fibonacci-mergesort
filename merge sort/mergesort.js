const mergeSort = (arr) => {
    if (arr.length == 1)
    {
      return [arr[0]]
    }
    else if (arr.length == 2)
    {
      return arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]]
    }
  
    let sortedArr = []
    let left = mergeSort(arr.slice(0, arr.length / 2))
    let right = mergeSort(arr.slice(arr.length / 2))
  
    while(left.length != 0 || right.length != 0)
    {
      if (left[0] > right[0])
      {
        sortedArr.push(right[0])
        right.splice(0, 1)
      }
      else if (left[0] < right[0])
      {
        sortedArr.push(left[0])
        left.splice(0, 1)
      }
      
      if (right.length == 0)
      {
        sortedArr.push(...left)
        left = []
      }
      else if (left.length == 0) 
      {
        sortedArr.push(...right)
        right = []
      }
    }
      return sortedArr
  }
  