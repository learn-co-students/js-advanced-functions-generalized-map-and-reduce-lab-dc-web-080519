function map(sourceArr, mapFunc) {
  let newArray = []
  for(const member of sourceArr){
    newArray.push(mapFunc(member))
  }
  return newArray;
}

function reduce(sourceArr, func, startingVal=0) {
  let memo = startingVal ? startingVal : sourceArr[0]
  let i = startingVal ? 0 : 1;
  for(i; i < sourceArr.length; i++) {
    memo = func(sourceArr[i], memo)
  };
  return memo;
}