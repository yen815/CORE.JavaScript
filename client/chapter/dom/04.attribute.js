/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

const first = document.querySelector('.first');

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// 너 first안에 class 속성을 가지고 있니?
console.log(first.hasAttribute('class'));

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('class'));

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id','text');
first.setAttribute('data-index','1');

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id');

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes);

// for(let value in first.attributes){
//   console.log(value);
// }

for(let value of first.attributes){
  console.log(value);
}



/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset


first.dataset.name = 'tiger'  // setter
console.log(first.dataset.name);  // getter
console.log(first.getAttribute('data-name'));

first.dataset.animation = 'paused'

//  if(first.dataset.animation === 'play'){

// }


function getAttr(node,prop){
  // let node = '.first';
  // let prop = 'class';

  // first // document.querySelector(node)

  if(typeof node !== 'string') node = getNode(node);
  if(typeof prop === 'string') throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  // node = document.querySelector(node);
  
  // first.getAttribute('class'); -> 얘를 가져와야 되기 때문에 앞에 return이 나온다.
  return node.getAttribute(prop);
}

// console.log(getAttr(first,'class'));  // "first"



function setAttr(node,prop,value){

  if(typeof node === 'string') node = getNode(node);
  if(typeof prop !== 'string' || typeof value !== 'string') throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  // value 안에 빈문자가 오면 속성을 제거
  if(value === ''){
    node.removeAttribute(prop);
    return;
  }

  if(!value) throw new Error('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.');
  
  // node.dataset.name = 'kindtiger'

  if(prop.startsWith('data')){
    prop = prop.slice(5);
    node.dataset[prop] = value;
    
    return;
  }  
  // first.setAttribute('id','box')
  node.setAttribute(prop,value)
}

setAttr('.first','class','');
// setAttr('.first','data-name','kindtiger');
// console.log(setAttr('.first','id','box'));




// function attr(node,prop,value){
//   !value? getAttr(node,prop) : setAttr(node,prop,value);
// }
// !value 대신 value === undefined로 해야 한다. 만약 setAttr로 지울때 getAttr이 호출되기 때문이다.
const attr = (node,prop,value) => value === undefined ? getAttr(node,prop) : setAttr(node,prop,value);






// getter, setter 한번에 설정
attr('.first','class');  // getter
attr('.first','class','hello');  // setter