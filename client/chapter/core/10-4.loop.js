/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '난 누굴까~?';
  },
};

// 객체에서 내가 원하는 값이 있어?
// in 문
Object.prototype.nickName = 'tiger';
// const key = 'nickName';
// console.log(key in javaScript);

// JS 자유로운 언어 : 내 마음대로 바꿀 수 있다.

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// hasOwnProperty
// 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 Boolean 값을 반환
// 프로퍼티의 값을 확인하는 것이 아니기 떄문에 값이 undef, null 이어도 true를 반환

const key = 'creatAt';

// console.log(javaScript.hasOwnProperty(key));
// javaScript 객체가 오염 된 상태, 조상거 갖다 쓰라는 뜻(객체 Object.prototype 원조)

// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));
// console.log(({}).hasOwnProperty.call(javaScript, key));

// 찐객체.원조를.h~property로.call한다.(부른다)(js에 있는 key값을)
// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

// 원하는 키 값만 빼고 순회할 수 있다.
// let으로 key라는 변수 지정
for(let key in javaScript){
  
  if(Object.prototype.hasOwnProperty.call(javaScript,key)){
    
    // console.log(key);
// value를 얻고 싶으면 console.log(javaScript[key]);
  }
}

// for in 으로 순환하는건 지양.(순서 보장 안되고, 성능도 안좋아진다) 
// for in 은 객체를 순환하는 용도로 사용해야 한다.

const tens = [10,100,1000,10000];

for(let key in tens){
  // console.log(tens[key]);
}


const obj = {}

obj.nickName = 'tiger'

Object.defineProperty(obj, 'key1', {
  enumerable:false,
  value: 'kindtiger'
})

Object.defineProperties(obj,{
  property1:{
    value: true,
    writable:true,
    enumerable:true
  },
  property2:{
    value:'hello',
    writable:false,
    configurable:true
  }
})