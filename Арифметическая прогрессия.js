//Как вернуть последний элемент массива (без мутации):
// вызов array.slice(-1)[0] аналогичен array[array.length - 1]

//Вариат решения 1

function generateRange(min, max, step) {

  const arRange = [min];

  while ((arRange.slice(-1)[0] + step) <= max) {
    arRange.push(arRange.slice(-1)[0] + step);
  }

  return arRange;
}

//Проверка ////////////////////////////////////////////////////////////

console.log(generateRange02(2, 10, 2)) // should return array of [2,4,6,8,10]
console.log(generateRange02(1, 10, 3)) // should return array of [1,4,7,10]
console.log(generateRange02(1, 10, 20)) // should return array of [1]

/////////////////////////////////////////////////////////////////////
//Вариат решения 2 //////////////////////////////////////////////////

function generateRange02(min, max, step) {

  const arifProg = [min];

  while ((arifProg[arifProg.length - 1] + step) <= max) {
    arifProg.push(arifProg[arifProg.length - 1] + step);
  }

  return arifProg;
}


//Вариат решения 3 ////////////////////////////////////////////////////

function generateRange03(min, max, step) {

  const arifmetikProgression = [min];

  let i = 0;
  while ((arifmetikProgression[i] + step) <= max) {
    i++;
    arifmetikProgression[i] = arifmetikProgression[0] + i * step;
  }

  return arifmetikProgression;
}
