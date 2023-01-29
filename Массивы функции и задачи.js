//Поиск минимального и максимального значений в массиве//////////////
function ArrayMinMax(arr) {
  arr.sort((a, b) => a - b);
  return [arr[0], arr.slice(-1)[0]]
}

//синтаксис es6
function ArrayMinMaxEs6(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}


// написать функцию, которая принимает три параметра: 
// 1) массив значений 2) индекс n элемента в массиве, который необходимо заменить другим значением 
// 3) Значение, на которое нужно заменить элемент с индексом n. 
// Функция должна возвращать новый массив.

function replace(arr, n, newValue) {
  return [...arr.slice(0, n), newValue, ...arr.slice(n + 1)];
}

//////////////////////////////////////////////////////////////////////////
// написать функцию, которая возвращает одномерный массив из многомерного:

function flattenArray(arr) {
  const result = arr.reduce((acc, el) => {
    if (!Array.isArray(el)) {
      return acc.concat(el);
    } else {
      return acc.concat(flattenArray(el));
    }
  }, [])
  return result;
}

//////////////////////////////////////////////////////////////////////////

