let numOne = '';
let numTwo = '';
let operator = '';
let result = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
  let number = event.target.textContent;

  // operator에 값이 없으면
  if (!operator) {
    numOne += number;
    $result.value += number;
    return;
  }

  // operator에 값이 있으면
  // numTwo에 값이 없으면
  if (!numTwo) {
    $result.value = '';
  }
  numTwo += number;
  $result.value += number;
};

const onClickOperator = (op) => () => {
  numOne
    ? ((operator = op), ($operator.value = op))
    : alert('숫자를 먼저 입력하세요.');
};

const clearAll = () => {
  numOne = '';
  numTwo = '';
  operator = '';
  $operator.value = '';
  $result.value = '';
  console.log('clear');
};

const calculateNumbers = () => {
  // numTwo에 값이 없으면
  if (!numTwo) {
    alert('연산할 숫자를 입력하세요.');
    return;
  }

  // numTwo에 값이 있으면
  switch (operator) {
    case '+':
      result = parseInt(numOne) + parseInt(numTwo);
      $result.value = result;
      break;
    case '-':
      result = parseInt(numOne) - parseInt(numTwo);
      $result.value = result;
      break;
    case '/':
      result = parseInt(numOne) / parseInt(numTwo);
      $result.value = result;
      break;
    case '*':
      result = parseInt(numOne) * parseInt(numTwo);
      $result.value = result;
      break;
  }

  // 계산 debugging
  console.log(`${numOne} ${operator} ${numTwo} = ${result}`);

  // 다음 계산 준비
  // 결과 값이 numOne, numTwo 는 '', operator는 ''
  numOne = result;
  numTwo = '';
  operator = '';
  $operator.value = '';

  console.log(numOne, operator, numTwo, result);
};

for (let i = 0; i < 10; i++) {
  document.querySelector(`#num-${i}`).addEventListener('click', onClickNumber);
}

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document
  .querySelector('#minus')
  .addEventListener('click', onClickOperator('-'));
document
  .querySelector('#divide')
  .addEventListener('click', onClickOperator('/'));
document
  .querySelector('#multiply')
  .addEventListener('click', onClickOperator('*'));
document
  .querySelector('#calculate')
  .addEventListener('click', calculateNumbers);

document.querySelector('#clear').addEventListener('click', clearAll);
