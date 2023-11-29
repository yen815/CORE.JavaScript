/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

// for문
// for (let i = 1; i < 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// for문 생략
// let j = 1;
// for ( j < 10;) {
//   j++
//   if (j % 2 !== 0) continue;
//   console.log(j);
// }

// for문 -> while문
// let j = 1;
// while (j <= 10) {
//   if (j % 2 === 0) {
//     console.log(j);
//   }
//   j++;
// }

// split은 배열로 반환해주는 기능
// split은 공백도 배열의 아이템으로 취급된다. 공백을 더 주면 정규식을 통해 공백 삭제를 해야 한다.
// .toString은 문자열로 변환해주는 기능
// .join()은 숫자내림 기능, 소숫점을 없애고 정수로 만들어준다.
const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');
let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

for (let i = 0; i < l; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  // if (lower.includes('jquery') || lower.includes('svg')) continue;

  // console.log(lower);
}

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

for (let i = 0; i < l; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  // if (lower.includes('jquery')) break;

  // console.log(lower);
}

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

// let zero = 0;

// for (let i = l; zero < 1; ) {
//   console.log(frontEndDev[--i]);
// }

// 위의 i와 겹치기 때문에 따로 밖에 선언을 안하고 for문 안에 넣는다.
// let i = l;
// let subject;

for (let i = l, subject; (subject = frontEndDev[--i]); ) {
  console.log(subject);
}
