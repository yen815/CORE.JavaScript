/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  // getFullName() {
  //   return `${this.brand}, ${this.maker}`;
  // },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);  // 오류가 나는 이유는 photo를 photos로 가져와서 그렇다.

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
// portableFan && portableFan.photos && portableFan.photos.animate

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName?.()

console.log(fullName);


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.




// web API
// sync(동기), async(비동기)
// 옵셔널체이닝 선언 시점에 상관없이 생기기만 하면 에러가 안난다.

const button = document?.querySelector('.clickButton');

button?.addEventListener('click',()=>{

})

const timer = setTimeout(function(){  // 값을 반환한다.
  

  const template = /* html */ `
    <button type="button" class="clickButton">clickMe</button>
  `

  document.body.insertAdjacentHTML('beforeend',template);
  
},3000)



// console.log(1)
// console.log(2)
// console.log(4)
// console.log(5)



// let count = 0;
// const id = setInterval(()=>{

//   // console.log(++count);
//   document.querySelector('.first').style.transform = 
//   `translateY(${++count}px) rotate(${++count}deg)`
  
//   if(count >= 30){
//     clearInterval(id)
//   }
// },10);

// setInterval은 일정한 시간대에 따라 작동한다면
// requestAnimationFrame은 본인 컴퓨터 사양에 따라 작동 된다. (조건문을 쓰면 속도 조정이 가능하다) 
// 서바이벌 게임에선 글로벌 타임을 맞춰서 설정

// 애니메이션

let count = 0;

function animation(){
  
  console.log( ++count );

  const id = requestAnimationFrame(animation)
  
  if(count >= 100){
    cancelAnimationFrame(id)
  }
}


// animation()