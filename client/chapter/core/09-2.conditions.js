// age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.
// "이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.

let age = 50;

// if (age >= 14 && age <= 90) {
//   console.log('청소년 또는 성인입니다.');
// }

// if (14 => age <= 90) {
//   console.log('청소년 또는 성인입니다.');
// }

/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// Logical AND Assignment 논리곱 할당 연산자
// a = a && b; 를 줄여서 쓰는 법
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;

console.log(AorB);

// Logical OR Assignment 논리합 할당 연산자
// a = a || b; 를 줄여서 쓰는 법
// a ||= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false }; // []: 빈배열은 true, { thisIsFalsy: false } 반환
// 빈배열[], 빈객체{} : true

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
//  정답 2번

// 로그인 구현하기
// 프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

// 사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요. 이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

// 비밀번호 확인 절차는 다음과 같습니다.

// 맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
// 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
// 빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.

// 중첩 if 블록을 사용하고, 코드 전체의 가독성을 고려해 답안을 작성하세요.

// 힌트: 프롬프트 창에 아무것도 입력하지 않으면 빈 문자열인 ''가, ESC를 누르면 null이 반환됩니다.

function login() {
  //let userName = prompt('누구십니까?').toLowerCase()로도 쓸 수 있다. 대신 Admin을 admin으로 바꾸고 설정
  let userName = prompt('누구십니까?');

  // console.log(userName);

  if (!userName) return;

  // 취소 버튼, esc 누르면 null
  // 어떤 값도 입력하지 않았을 경우에는 빈문자''

  if (userName.toLowerCase() === 'admin') {
    // userName?.toLowerCase() : ? = 옵셔널 체이닝 / null.toLowerCase()이기 때문에 옵셔널 체이닝을 쓴다, admin.toLowerCase()도 쓸 순 있으나 admin만 입력을 해야 된다
    console.log('환영합니다.');
    let password = prompt('비밀번호는?');
    // console.log(password);
    if (password.toLowerCase() === 'themaster') {
      // .toLowerCase()는 'TheMaster'를 'themaster'로 바꾸고 사용해야 함
      console.log('로그인 성공 환영합니다!');
    } else {
      console.log('비밀번호를 잘 못 입력하셨습니다.');
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    // 정규식 표현 : /\s*/g
    console.log('취소됐습니다.');
  } else {
    console.log('올바른 사용자가 아닙니다.');
  }
}

login();
