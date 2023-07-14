const fibsR = (num) => {
    if (num <= 0)
    {
      return []
    }
    else if (num == 1)
    {
      return [0]
    }
    else if (num == 2)
    {
      return [0, 1]
    }
    
    let arr = (fibsR(num - 1))
    arr.push(arr[num - 2] + arr[num - 3])
    return arr
}

console.log(fibsR(20))