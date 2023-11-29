/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const boolean = false;

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(boolean || WIDTH);
console.log(boolean ?? WIDTH); // 정의한 값인 false가 표현

console.log('' || WIDTH);
console.log('' ?? WIDTH);

// Logical Assignment Operators

let x;
let y;

x ||= y; // x가 false 일 때 y값을 x에 할당
x &&= y; // x가 true 일 때 y값을 x에 할당
x ??= y; // x가 undefinde, null 일 때 y값을 x에 할당

let title;

title ||= '범쌤과 함께는 JS수업!';

let person = {
  firstName: 'yeeun',
  lastName: 'cho',
};

person.lastName &&= 'choi';

let user = {
  userName: 'choiyen',
};

user.nickName ??= 'yen';
