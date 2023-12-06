/* --------- */
/* Object    */
/* --------- */

/* global isObject */

const html = /* html */ `
  <h1>title</h1>
  <div class='first'>
    hello
  </div>
  `


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position : 'fixed',
  zIndex: 1000,
  top: '50%',
  left: '50%',
  width: '60vw',
  height: '40vh',
  minheight: 280,
  transform: 'translate(-50%,-50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-aszxdsjfk@1232#',
  name: 'yen',
  email: 'yen@gmail.com',
  isSignIn: false,
  permission: 'paid' // paid | free
}

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission = '');

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['uid']);
// console.log(authUser['name']);
// console.log(authUser['email']);
// console.log(authUser['isSignIn']); // get
// console.log(authUser['permission'] = 'paid'); // set


Object.prototype.SIGN = true;

for(let key in authUser){
  if(({}).hasOwnProperty.call(authUser,key)){

  //  console.log(key);
  //  console.log(authUser);
  }
}


// 객체의 key만을 모아놓은 배열
let keyList = Object.keys(authUser);
// console.log(keyList);


// 객체의 value만을 모아놓은 배열 
let valueList = Object.values(authUser);
// console.log(valueList);

function getPropertiesList(object){
  
  let result = [];

  for(let key in object){
    if(Object.prototype.hasOwnProperty.call(object,key)){
      result.push(key)
    }
  }
  return result;
}


// const result = getPropertiesList(authUser);


// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

// shortand
function createUser(name,age,phone = '010-0000-0000'){

  return { name, age, [calculateProperty]:phone }
}
// 위의 내용 풀어쓰기
/*function creatUser(name,age,phone = '010-0000-0000'){
  return {
    name: name,
    age: age,
    [calculateProperty]: phone
  }
}
*/

const user = createUser('tiger','35');

// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


function removeProperty(object,key){

  if(isObject(object)){
    object[key] = null;
  }
  // return key -> 제거할 땐 필요없고, 제거한 값을 사용, 반환해야 될 때 사용
}  // authUser.name = null

removeProperty(authUser,'name');


function deleteProperty(object,key){
  if(isObject(object)){
    delete authUser[key];
  }
}


// removeProperty(authUser,'name')  // authUser.name = null
 deleteProperty(authUser,'name') // delete authUser.name


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// shortand
const student = { name, email, authorization, isLogin }

console.log( student );

// 풀어쓰기
/*const student = {
  name: name,
  email: email,
  authorization: authorization,
  isLogin: false

  console.log( student );
}*/


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 순서 바꿀 수 없다.
// 변수 이름을 바꿀 수 있다.
// 구조분해할당 안에 구조분해할당 가능하다.
const arr = [10,100,1000,10000];

// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[2];
// const a4 = arr[3];

// const [a1,a2,a3,a4] = arr;
// const [a1,,a3,a4] = arr;
const [a1,...d] = arr;

console.log(d);

// for(let keyValue of Object.entries(authUser)){
//   let key = keyValue[0];
//   let value = keyValue[1];
  
//   console.log(key);
// }

// 위 아래 동일한 내용

for(let [key,Value] of Object.entries(authUser)){
  // let key = keyValue[0];
  // let value = keyValue[1];
  
  console.log(key);
}

const [first,second,third] = document.querySelectorAll('span'); // NodeList

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

/*const salaries = {
  김지수: 85,
  이정현: 50,
  박수양: 6,
  장효진: 33,
}*/

// 배열 구조 분해 할당 : 월급의 총 합을 구하세요.

// let total = 0;
// for(let [key,value] of Object.entries(salaries)){
//   total += value;
// }

// console.log(total);


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 순서가 정해지지 않았다.
// 변수의 이름을 변경할 수 있다.

const salaries = {
  김지수: 85,
  이정현: 50,
  박수양: 6,
  장효진: 33,
}

// console.log(salaries.김지수);

const {이정현:lee,김지수:kim,박수양:park,장효진:jang,이경화 = '500'} = salaries;
// 순서는 중요하지 않다.

console.log(이경화);




function createUserData(obj){

  console.log( obj );

  const {userName,age,job,gender = 'male'} = obj;

  return { userName, age, job, gender }

  
  // return {
  //   userName: obj.userName,
  //   age: obj.age,
  //   job: obj.job,
  //   gender: 'male'
  // }


}



const user1 = createUserData({
  userName:'tiger',
  age:40,
  job:'developer'
})


const {
  userName,
  age,
  job,
  gender = 'male'
} = {
  userName:'tiger',
  age:40,
  job:'developer'
}





// function getUser(object){

//   const {userName:u} = object;

//   // u = 'tiger';

  
//   // console.log(u);


// }




// const data = {
//   userName:'tiger',
//   age:40,
//   job:'강사',
//   gender:'male'
// }


// getUser( data )