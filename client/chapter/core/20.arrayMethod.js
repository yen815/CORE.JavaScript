/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = (data) => Array.isArray(data)
const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'

function normalIsArray(data){
  // return Array.isArray(data)
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}


// isArray([])  // true | fale

// console.log(Array.isArray([]));

const arr = [10,100,1000,10_000]

const people = [
  {
    id:0,
    name:'김다영',
    job:'프론트엔드 개발자',
    age:25,
    imageSrc:'ASdkl31'
  },
  {
    id:1,
    name:'김충만',
    job:'치킨집사장',
    age:51,
    imageSrc:'asFkzo23',
    alt:'밝게 웃고있는 치킨집 사장님'
  },
  {
    id:2,
    name:'조윤주',
    job:'화가',
    age: 12,
    imageSrc: 'Gzoskq13'
  },
  {
    id:3,
    name:'송현규',
    job:'마델',
    age:25,
    imageSrc:'aabaq23'
  }
]

/* 요소 순환 ---------------------------- */

// forEach
// [10,100,1000,10_000]
arr.forEach((item,index) => {
  // console.log(item, index)
})

// for문
// for(let i=0; i < arr.length; i++){
//   console.log(arr[i], i);
// }

// people.forEach(item => console.log(item.job))

people.forEach((item)=>{
  // console.log(item)
  console.log(item.job)  
  // forEach의 역할 : 배열을 벗겨서(까뒤집어서) 알맹이만 보이게끔 해준다.
})


const span = document.querySelectorAll('span');

span.forEach((item)=>{
  item.addEventListener('click',function(){
    this.style.color = 'red'
  })
})


// 여러 항목들을 이벤트 바인딩 제일 효과적인가? no

// event delagation : 이벤트 위임

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

// first.addEventListener('click',()=>{
//   console.log('clicked');
// })

// second.addEventListener('click',()=>{
//   console.log('clicked');
// })

// third.addEventListener('click',()=>{
//   console.log('clicked');
// })

/* 원형(원본) 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

// const arr = [10,100,1000,10_000]
// const reverseArray = arr.reverse();
// to가 붙으면 원본 파괴를 안한다. reserve : 파괴, toReversed : 원본 보존
const reverseArray = arr.toReversed(); // 원형 파괴 2023
// console.log(reverseArray);
console.log( arr.toSpliced(1,2,'javascript','css','react') );


// sort로 하면 원본 훼손, toSorted는 원본 보존
const a = arr.toSorted((a,b) => {
  return b - a;
})

console.log(a);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const card = people.map((item,index)=>{
  return /* html */`
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `
})

// console.log(card);


card.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})

// job만 모여있는 배열 만들기
const jobs = people.map((item)=>{
  return item.job
})
// console.log(jobs)

const newAge = people.map(item => item.age - 2)

// console.log( newAge );



/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const findUser = people.findIndex((item) => {
  return item.name === '송현규';
})

// console.log(findUser);

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
const 젊은이들 = people.filter((item)=>{
  return item.age < 30;
})

console.log(젊은이들)

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

// const totalAge = people.reduce((acc,cur)=>{
//   return acc + cur.age
// },0)

// 위의 내용을 줄인 버전
const totalAge = people.reduce((acc,cur)=>acc + cur.age,0)

const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,'')

// console.log( template );

document.body.insertAdjacentHTML('beforeend',template);

// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const str = '종명 예진 현주 지안 훈 은원';

// split : 문자 -> 배열

const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 -> 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);