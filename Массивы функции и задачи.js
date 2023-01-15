//Поиск минимального и максимального значений в массиве//////////////
function ArrayMinMax(arr) {
  arr.sort((a, b) => a - b);
  return [arr[0], arr.slice(-1)[0]]
}

//синтаксис es6
function ArrayMinMaxEs6(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}
