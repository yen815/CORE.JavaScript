/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// const resultX = calcTotal(10000, 8900, 1360, 2100);
// const resultY = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
// 뒤에 함수를 본문과 연결시켜 주는 것
// let calculateTotal = function(a,b,c,d,e,f,g){


  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  // arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템을 수집할 수 있다 : 모든 값을 더한다.
  // console.log(arguments);
  
  // let total = 0;

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
// Array.prototype.forEach.call(arguments,function(item){
//   total += item;
// })


// 빌려쓰지 말고 진짜 배열 만들기
// slice를 arguments가 빌려씀.
// 배열로 만드는 법
// 1번 : slice
// const arr = Array.prototype.slice.call(arguments);
// 2번 : from
// const arr = Array.from(arguments);   // 구식에선 from을 인식 못할 땐 위의 식을 사용하고, 인식이 된다면 해당 식을 사용.
// 3번 : spread(...)
// const arr = [...arguments];
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
// total = arr.reduce(function(acc,cur){
//   return acc + cur
// },0)

// 화살표 함수 사용 시
// return arr.reduce((acc,cur) => acc + cur,0);


// 예시
// const arr = ['김다영','이경화','김용범'];


// const newArr = ['김다영-hi','이경화-hi','김용범-hi'];

// let name = [];

// arr.forEach(function(item){
//   name.push(item + '-hi')
// })


// console.log(name);


// const name = arr.reduce(function(acc,cur){

//   acc.push(cur + '-hi');
  
//   return acc;
// },[])


// console.log( name );


// const name = arr.map(function(item){
//   return item + '-hi'
// })

// console.log(name);


// 콜백 함수는 표현식(화살표 함수)으로 많이 쓴다.

// for Each, reduce

  // return total;
  // return a + b + c + d + e + f + g
// };

// const result = calculateTotal(1000,2300,5000,1500,3500,4600,35000);

// console.log(result);



// 익명(이름이 없는) 함수 (표현)식
// let anonymousFunctionExpression = function(){

// };


// 유명(이름을 가진) 함수 (표현)식
// let namedFunctionExpression = function hello() {

// };


// 함수 이름은 hello지만 namedFunctionExpression으로 호출해서 찾는다.
// 보통 함수 이름을 부여하진 않는다.


// 콜백 함수 (표현)식

// 예시1
// let cb = function(isActive,success,fail){

//   if(isActive){
//     success();
//   } else {
//     fail();
//   }
// };

// 줄여서 입력
// if(isActive) success();
// else fail()
// };

// 삼항식
// isActive? success : fail

// cb(
//   false,
//   function(){
//     console.log('성공!')
//   },
//   function(){
//     console.log('실패!')
//   });


// 예시2
function movePage(url,success,fail){

  // if(url.match(/http.+www/) || typeof url === 'string'){
  if(url.match(/http.+www/) && typeof url === 'string'){
    success(url)
  } else {
    fail('에러입니다!')
  }
}

movePage(
  // 'https://www.naver.com',
  'htt.naver.com',

  function(url){
    console.log(url + '페이지로 넘어갑니다.');
  },

  // function(){
  //   console.log('입력하신 url 주소는 없는 주소입니다.');
  // }

  function(err){
    console.log(err);
  }
)



// 함수 선언문 vs. 함수 (표현)식




// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 함수가 선언 됨과 동시에 실행되는 것을 말한다.
// var를 가둬두려고 생성(블록스코프에 갇히지 않기 때문이다)
// var는 블록 스코프 : x
// var는 함수 스코프 : o
// 요즘엔 잘 안쓰이지만 아예 안쓰이는건 아니다.
// import css from 'css.js' -> module이 생겨서 요즘엔 안쓴다.
// 모듈화 => 모듈 프로그래밍


//즉시 실행 함수식
(function a(){
  var b = 10;
})();

(function b(){
  var b = 10;
})();

// 예시

// const MASTER = (function (){
//   let uuid = 'akdfkdjfkd'

//   return uuid

// })();

// console.log(MASTER);


const MR = (function (g){
  let uuid = 'akdfkdjfkd'

  console.log(g);

  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value
    }
  }

})(window);

// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')



// css라는 모듈에 갇혀 있어서 콘솔엔 getStyle, setStyle 노출이 안된다.
// css 함수 안에 getStyle, setStyle 함수를 담아놔서 필요는 하니까 저 친구들을 지울 수가 없는 상황이라서 봉인
// css라는 모듈을 하나 만들어두고, 모듈에서 정작 내보낼껀 css함수 하나만 내보내면 된다.
// 그런데 이제는 import로 불러와서 쓰니까 요샌 잘 안쓰인다.

const css = (function(){

  function getStyle(node,prop){

    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');

    return getComputedStyle(node,null)[prop]
  }

  function setStyle(node,prop,value){

    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')
    
    node.style[prop] = value;

  }

  function css(node,prop,value){
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node,prop) : setStyle(node,prop,value);

  }

  return css
})()


