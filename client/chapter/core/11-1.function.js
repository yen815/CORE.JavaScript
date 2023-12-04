/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);


// 1 아니면 0을 내보낸다.
// function getRandomValue(){
//   return Math.random() > 0.5 ? 1 :0;
// }

// 함수 선언
// function calcPrice(
//   priceA,
//   priceB,
//   priceC = getRandomValue(),
//   priceD = getRandomValue()){
  // if(!priceC){priceC = 0;}
  
  // priceC = priceC || 0; // 해당 내용을 줄이면 아래의 내용
  // priceC ||= 0;

  // priceC = priceC ?? 0; // 해당 내용을 줄이면 아래의 내용
  // priceC ??= 0;
  // if(!priceA){priceA = 0;}
  // if(!priceB){priceB = 0;}

//     if(!priceA || !priceB){
//       throw new Error('calcPrice 함수의 첫 번째와 두 번째 인수는 필수 입력 값입니다.');
//     }

//   return priceA + priceB + priceC + priceD;
// }

// 함수 호출
// const result = calcPrice();

// console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
// 1. 하나의 기능 만을 수행해야 한다.
// 2. 이름과 매개 변수의 이름을 직관적으로 적어야 한다.(가독성 => 읽었을 때 바로 기능을 알 수 있다.)
// 3. 재사용성이 좋아야 한다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxValue,base = 16){

  if(!pxValue) throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.')

  // t||(true값을 반환), f&&(false 값을 반환)
  // typeof가 string이면 parseInt(정수)를 pxValue에 반환
  typeof pxValue === 'string' && (pxValue = parseInt(pxValue,10));
  typeof base === 'string' && (pxValue = parseInt(base,10));
  
  // 위의 typeof는 아래의 if문을 짧게 쓴 문

  // if(typeof pxValue === 'string'){
  //   pxValue = parseInt(pxValue,10);
  // }

  // if(typeof base === 'string'){
  //   base = parseInt(base,10);
  // }

  return pxValue / base + 'rem';
}


// Test Driven Development

// console.assert(rem(20) === 1.25)
// console.assert(rem(20) === '1.25rem')
// console.assert(rem('25px') === '1.5625rem')
// console.assert(rem('30px',10) === '3rem')




// css(node: string, prop: string, value: number|strung) : string;
/*
1. function name
2. parameter, arguments
3. return value
4. validation
5. test [Test Driven Development]
*/

function getStyle(node,prop){

  if(typeof node === 'string') node = document.querySelector(node);
  if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 string 타입이어야 한다.');

  return getComputedStyle(node,null)[prop]; 
  // null : 가상요소, 명시적으로 비워둔 것
  // []: computed property, 대괄호는 쓰는 건 객체의 키 값에 접근할 때 변수를 받으려면(변수가 들어올 때) 대괄호 표기법으로 해야 한다. computed 표기법.
}



// node = document.body, prop = .backgound, value = 'orange'
// document.body.style.backgound = 'orange'

function setStyle(node,prop,value){
  
  if(typeof node === 'string') node = document.querySelector(node);
  // 문자가 맞다면 노드를 (node)에 담아서 전해줘
  if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 string 타입이어야 한다.');
  if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')

  node.style[prop] = value;
  // 위의 식은 set. 즉, 설정하는 것이기 때문에 값을 반환할 필요가 없어서 return을 안써도 된다. (위의 식은 get으로 받아오는거라 있어야 한다.)
}

setStyle('.first','background','hotpink')
// setStyle('body','background','hotpink')

// setStyle() // body의 배경색이 orange

// getStyle(document.body,'fontSize')

// const result = getComputedStyle(body,'border') // 0px solid transparent




// 아래의 식은 function css를 arrow function으로 작성했을 때
// const css =  (node,prop,value) =>!value ? getStyle(node,prop) : setStyle(node,prop,value);

function css(node,prop,value){
  if(!value){
    //getter
    getStyle(node,prop);
  } else {
    //setter
    setStyle(node,prop,value);
  }
  return !value ? getStyle(node,prop) : setStyle(node,prop,value);
}

css('.first','font-size')  // getter
css('.first','font-size','100px')  // setter


// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.