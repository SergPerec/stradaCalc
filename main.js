const operations = {
  add: '+',
  multi: '*',
  substract: '%',
};

function calc(oper, oneNum, secNum) {
  if ( isNaN(oneNum) || isNaN(secNum) ) {
    return 'Вы ввели не число.';
  } else if (oper === operations['add']) {
    return oneNum + secNum;
  } else if (oper === operations['multi']) {
    return oneNum * secNum;
  } else if (oper === operations['substract']) {
    return oneNum % secNum;
  } 

}

console.log(calc('+', 5, 7));