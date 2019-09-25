// Add your functions here
function map(array, func) {
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray
}

function reduce(array, func, startingVal) {
  let memo = (!!startingVal) ? startingVal : array[0]
  let i = (!!startingVal) ? 0 : 1
  for (; i < array.length; i++){
    memo = func(array[i], memo)
  }
  return memo;
}
