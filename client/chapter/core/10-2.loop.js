/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
//   console.log(i);

//   if (i === 0) {
//     console.log('init');
//   }
//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = prompt('몇번 반복 하시겠습니까?', 0);

// do {
//   console.log(repeat);
//   if (repeat < 0) {
//     console.log('최초 실행!');
//     break;
//   }
//   repeat--;
// } while (repeat);

// 첫번째 문자는 처음에 받은 문자열 그대로 콘솔창에 나옴

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let repeat = prompt('몇번 반복 하시겠습니까?', 0);

// let count = 0;
// do {
//   if (count >= 10) {
//     break;
//   }

//   console.log(++count);
// } while (repeat--);

let first = document.querySelector('.first');

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

// const second = next(first);
// const third = next(second);

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

// prev(second);
