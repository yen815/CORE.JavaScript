/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
// 뒤에 함수를 본문과 연결시켜 주는 것
let calculateTotal = function(a,b,c,d,e,f,g){


  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  // arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템을 수집할 수 있다 : 모든 값을 더한다.
  // console.log(arguments);
  
  let total = 0;

  // for 문
  
//   for(let i = 0; i < arguments.length; i++){
//     // total = total + arguments[i];
//     total += arguments[i];
//   }


  
  // for..of 문
//   for(let value of arguments){
//     total += value;
//   }



// 빌려쓰기
// arguments를 1회성으로 빌려씀. 또 쓰려면 call을 해서 써야 함.
Array.prototype.forEach.call(arguments,function(item){
  total += item;
})


// 빌려쓰지 말고 진짜 배열 만들기
// slice를 arguments가 빌려씀.
// 배열로 만드는 법
// 1번 : slice
// const arr = Array.prototype.slice.call(arguments);
// 2번 : from
// const arr = Array.from(arguments);   // 구식에선 from을 인식 못할 땐 위의 식을 사용하고, 인식이 된다면 해당 식을 사용.
// 3번 : spread(...)
const arr = [...arguments];
// console.log(arr);




// arguments의 (태생)부모 자체를 배열로 바꿔 버리면?
// arguments.__proto__ = Array.prototype;

// console.log(arguments);
// 이 안에서만 쓰기 때문에 위험하진 않다.



// forEach : 값을 반환하지 않음.
// arr.forEach(function(element){
//   total =+ element;
// })

// map : 값을 반환함. 단, 배열만 반환.

// filter : 값을 반환함. 단, 배열만 반환.

// reduce : 값을 반환함. 코드 자체를 줄여쓸 수 있어서 reduce
// acc : 누적 값, cur : 현재 값(1000) -> result의 첫 번째 값
total = arr.reduce(function(acc,cur){
  return acc + cur
},0)

// 화살표 함수 사용 시
// return arr.reduce((acc,cur) => acc + cur,0);


// 콜백 함수는 표현식(화살표 함수)으로 많이 쓴다.

// for Each, reduce

  return total;
  // return a + b + c + d + e + f + g
};

const result = calculateTotal(1000,2300,5000,1500,3500,4600,35000);

console.log(result);



// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression;


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
