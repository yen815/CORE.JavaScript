/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
// console.log('extractCharacter:',extractCharacter)


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
// immutable : 불변의
let immutableChangeCharacter;

// message[3] = i;
// console.log('B' + message.slice(1));


// 부분 문자열 추출
let slice = message.slice(4,-1);
// console.log('slice:',slice);

let subString = message.substring(2,5);
// console.log('substring:',subString)

// let subStr = message.subStr();


// 문자열 포함 여부 확인
let indexOf = message.indexOf('Hi');
// console.log('indexOf:',indexOf)

function checkBrowser(){
  
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true){
    case agent.indexOf('edge') > -1: browserName = 'MS Edge'; break;
    case agent.indexOf('chrome') > -1 && !!window.chrome: 
    browserName = 'Chrome'; break;
    case agent.indexOf('safari') > -1: browserName = 'safari'; break;
    case agent.indexOf('firefox') > -1: browserName = 'firefox'; break;
    case agent.indexOf('trident') > -1: browserName = 'IE'; break;
  }

  return browserName
}

// checkBrowser()

// 뒤에서부터 찾지만 순서는 앞에서부터 시작
// s의 위치 확인
let lastIndexOf = message.lastIndexOf('s');
// console.log('lastIndexOf:',lastIndexOf)

// Less를 포함하고 있는가?
let includes = message.includes('Less');
// console.log('includes:',includes)

//너 less로 시작하는가?
let startsWith = message.startsWith('less');
// console.log('startsWith:',startsWith)

// 끝단위가 .으로 끝나는가?
let endsWith = message.endsWith('.');
// console.log('endsWith : ',endsWith)


// 공백 잘라내기
let str = '   a  b    c  d   ';

// 왼쪽 공백 제거
let trimLeft = str.trimStart();
// console.log(trimLeft);

// 오른쪽 공백 제거
let trimRight = str.trimEnd();
// console.log('trimRight:',trimRight)

// 양쪽 공백 제거
let trim = str.trim();
// console.log('trim:',trim)

// 모든 공백 제거(정규식 표현 사용) 
let reg = str.replace(/\s*/g,'');
// console.log(reg);

function normalText(string){
  return string.replace(/\s*/g,'')
}

// console.log(reg);

// 텍스트 반복
let repeat = message.repeat(3);
// console.log(repeat)


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
// 모든 이름을 카멜케이스로 바꿀 수 있는 함수
// \s = 공백 _ = 언더스코어 - = 하이픈 +. = 뒤의 모든 문자
// easeInOutBounce

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}


function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}


// `${'100'.padStart(4,'0')}.jpg`