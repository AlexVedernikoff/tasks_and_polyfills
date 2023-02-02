// Написать функцию add, которая принимает число
// и может вызываться бесконечное число раз,
// пока не будет вызвана без аргументов - тогда возвращается сумма переданных
// ранее чисел:

// console.log( add(9)(10)() ); // 19
// console.log( add(9)() ); // 9
// console.log( add() ); // 0


function add(arg1) {
  if (!arg1) return 0;
  return (arg2) => {
    if (!arg2) {
      return arg1;
    }
    return add(arg1 + arg2);
  }
}


