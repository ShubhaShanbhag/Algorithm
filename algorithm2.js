// Factorialize

// write a function with num as parameter
//use if condition
// display num

function factorialize(num) {
    if (num === 0 || num === 1){
      return 1;}
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
console.log(factorialize(4));