const OPERATIONS = {
  PLUS: '+',
  MINUS: '-',
  MULTI: '*',
  DIVISION: '/',
};
function calc() {
  const oneNum = Number(document.getElementById("inputOne").value);
  const secNum = Number(document.getElementById("inputSecond").value);
  const oper = document.getElementById("select").value;
  let res
  if (oper === OPERATIONS.PLUS) {
    res = oneNum + secNum;
  } else if (oper === OPERATIONS.MINUS) {
    res = oneNum - secNum;
  } else if (oper === OPERATIONS.MULTI) {
    res = oneNum * secNum;
  } else if (oper === OPERATIONS.DIVISION) {
    res = oneNum / secNum;
  }
  document.getElementById('res').innerHTML = res.toFixed(3);
}