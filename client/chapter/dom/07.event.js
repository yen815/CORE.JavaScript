/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler(){
  console.log('클릭 발생!!');
}


// first.onclick = handler




// 3. 메서드 : element.addEventListener(event, handler[, phase])



function handleClick(){
  
  console.log('클릭했습니다.');
}

// first.addEventListener('click',handleClick);

// getNode('.second').addEventListener('click',()=>{
//   first.removeEventListener('click',handleClick)
// })


function bindEvent(node,type,handler){

  if(typeof node === 'string') node = getNode(node);

  node.addEventListener(type,handler);

  return () => node.removeEventListener(type,handler)

}



// const remove = bindEvent('.first','click',handleClick);
// getNode('.second').addEventListener('click',remove);


// first.addEventListener('mousemove',handleClick)
// first.addEventListener('mouseleave',handleClick)








const ground = getNode('.ground');
const ball = getNode('#ball');


function handleClickBall({offsetX:x,offsetY:y}){

  // const {offsetX:x,offsetY:y} = e;
  console.log(x, y);
  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`
}


// ground.addEventListener('click',handleClickBall)




// 몇초에 한 번씩만 호출되도록, 마우스의 움직이 끝나면 호출되도록 하는 방법
// Throttle & Debounce
// 애니메이션 & 통신 등에 사용(호출에 대한 제한을 걸 수 있다)  

// ground.addEventListener('mousemove',({offsetX:x,offsetY:y})=>{

//   // console.log(x,y);

//   let template = `
//     <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
//   `

//   // ground.insertAdjacentHTML('beforeend',template)
  
// })


// 타이머 중복실행을 방지하려고 clearTimeout
// web API에서 반복적으로 들어왔다 삭제 되다가 마지막 순번에 Event Loop로 넘어가고, call stack으로 넘겨진다.
// debounce는 0.1초 동안 재호출이 없으면 함수를 실행
//  함수 생성 -> 함수 제거 ->함수 생성을 반복

// let timeout;

// function debounce(callback,limit = 100){
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     callback()
//   }, limit);
// }
// debounce(()=>{
// },1000)



// debounce

// ground.addEventListener('mousemove',debounce((e)=>{
//   // console.log( e );
// },2000))

// window.addEventListener('resize',()=>{
//   console.log('resize!!');
// })


// 클로저 사용
function debounce(callback,limit = 100){

  let timeout;

  return function(...args){
    // console.log( args );
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this,args)
    }, limit);
  }
}

// throttle
// 무조건 1회만 실행하는 함수

ground.addEventListener('mousemove',throttle(()=>{
  // console.log( e );
},2000))



function throttle(callback,limit = 100){
  let waiting = false;

  return function(){
    if(!waiting){
      callback.apply(this,arguments);
      waiting = true;
      // callback을 실행 함과 동시에 true로 바꿔서 1회만 사용된다
  
      // setTimeout으로 false로 바꿔주니까 일정 시간마다 실행된다
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  }
}



// call
// apply
// bind


function func(a,b){
  
  console.log('this : ' , this);
  console.log('A : ' , a);
  console.log('B : ' , b);
  
}

// func.call('tiger',1,2)  // call : 실행
// func.apply('tiger',[1,2])  // apply : 실행. 배열로 묶어서 전달
// const a = func.bind('tiger',1,2)  // bind : 함수를 실행시키지 않고 묶어주기만 한다.
// a()

// button.addEventListener('click',a);








/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener



// 그러면 함수funcA와 함수 funcB가 있는데 funcB.apply(funcA, args)를 실행하고 funcB함수안에서 this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?


function funcA(a,b,c){
  console.log(a,b,c);
}

function funcB(a,b,c){
  this(a,b,c)
}


funcB.apply(funcA,[1,2,3])