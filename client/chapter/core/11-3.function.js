/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
// 일반 함수는 argument를 내장하고 있지만, 화살표 함수는 없다.
// let calcAllMoney = (...rest) => {} : (...rest)가 매개변수 안에서 쓰이면 rest parameter
// 밖에서 쓰이면 syntax

// reduce 일반 함수 예시
let calcAllMoney = (...args) => {

  // normal function
  // let total = 0;    
  // total = args.reduce(function(acc,cur){
  //   return acc + cur;
  // },0)

  // arrow function
  let total = 0;
  total = args.reduce((acc,cur) => acc + cur,0)
  return total;
};

let calcAllMoney2 = (...args) => args.reduce((acc,cur) => acc + cur,0);


const result = calcAllMoney(1000,5000,4500,15000);

console.log( result );


// 화살표 함수와 this

// 일반 함수의 양면의 얼굴  // 생성자
// 생성자로 보여야 해서 일반 함수와는 다르게 보이게 PascalCase를 사용
// 가독성을 위해 class가 쓰인다. 추후 학습 예정.
// 화살표함수는 생성자 함수와 쓸 수 없다
function Button(name){
  this.name = name;
}

const b = new button('tiger');


function button(){
  // return 'hello';
}

const a = button();

// new String()
// new Number()
// new Object()
// new Array()


// 일반 함수
// constructor 내장
// this : 나를 호출한 대상을 this로 찾는다
// 객체의 매서드로 사용이 많이 된다. -> this를 찾기 위함이다.

// 화살표 함수
// constructor 비내장
// this : 자체를 바인딩(가지지)않는다, global or x(내장한 this가 없어서 내 부모에서 찾는다)
// 객체 안의 매서드 안의 함수로 많이 쓰인다. -> 내 상위 this를 가져 오기 위함이다.

// 모듈은 전역을 보호하기 때문에 undefined

// concise 메서드는 constructor는 내장하고 있지 않지만 this는 갖고 있다.
const user = {
  total : 0,
  name : '상원',
  age : 13,
  address : '서울시 중랑구 면목동',
  grades : [80,90,100],
  totalGrades(){   // constructor 비내장
    // this = user

    this.grades.forEach(item => this.total += item)

    return this.total;
    
  //  console.log('일반 함수 :',this);
    
  //  const sayHi = () => {
  //    console.log('sayHi :',this);
  //  }
    
  //  sayHi()
  }
}

// user.totalGrades()

const result2 = user.totalGrades();
console.log(result2);

// 메서드 체이닝  : jQuery 
// user.totalGrades().grades


// $().fadeOut().css().animate()






/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric,powerCount) => {
  let result = 1;

  for(let i = 0; i < powerCount; i++){
    result *= numeric
  }
  return result;
}; 


// let powExpression = (numeric,powerCount) => {
//   return Array(powerCount).fill(null).reduce((acc) => {
//     return acc * numeric
//   },1)
// }

// powExpression(2,53)


// 화살표 함수로 변환

let powExpression = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc * numeric,1)

powExpression(2,53)

// console.log(pow(2,53));

// pow(2,53)  // 2의 53승(2**53) : 9007199254740992

// repeat(text: string, repeatCount: number): string;

// for문
let repeat = (text,repeatCount) => {
  let result = '';

  for(let i = 0; i < repeatCount; i++){
    result += text
  }
  return result;
}; 

// repeat('hello:)',3)  // 'hello:)hello:)hello:)' 


// reduce를 이용한 화살표 함수
// 길게 푼 버전
/*
let repeatExpression = (text,repeatCount) => {
  return Array(repeatCount).fill(null).reduce((acc)=>{
    return acc + text
  }, '')
}
 */

// 위의 내용 한줄로 만들기
let repeatExpression = (text,repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc + text, '')

repeat('hello:)',3)  // 'hello:)hello:)hello:)' 