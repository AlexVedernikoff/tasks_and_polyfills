function generateRange(min, max, step) {

  const arifProg = [min];

  while ((arifProg[arifProg.length - 1] + step) <= max) {
    arifProg.push(arifProg[arifProg.length - 1] + step);
  }

  return arifProg;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



console.log(generateRange(2, 10, 2)) // should return array of [2,4,6,8,10]
console.log(generateRange(1, 10, 3)) // should return array of [1,4,7,10]
console.log(generateRange(1, 10, 20)) // should return array of [1]


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function generateRange1(min, max, step) {

  const arifmetikProgression = [min];

  let i = 0;
  while ((arifmetikProgression[i] + step) <= max) {
    i++;
    arifmetikProgression[i] = arifmetikProgression[0] + i * step;
  }

  return arifmetikProgression;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



console.log(generateRange1(2, 10, 2)) // should return array of [2,4,6,8,10]
console.log(generateRange1(1, 10, 3)) // should return array of [1,4,7,10]
console.log(generateRange1(1, 10, 20)) // should return array of [1]


