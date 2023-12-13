/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler(){
  console.log('클릭 발생!');
}


// first.onclick = handler;


// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(){
  console.log('클릭했습니다.');
}

first.addEventListener('click',handleClick);

// first인 hello를 클릭하다가 second인 javascript를 누르고 hello를 누르면 click 이벤트가 중단된다.
// getNode('.second').addEventListener('click',()=>{
//   first.removeEventListener('click',handleClick)
// })



// closure
function bindEvent(node,type){
  if(typeof node === 'string') node = getNode(node);

  node.addEventListener(type,handler);

  return function(){
    node.removeEventListener(type,handler);
  } 
}

const remove = bindEvent('.first','click',handleClick)

// first.addEventListener('mousemove',handleClick);
// first.addEventListener('mouseleave',handleClick);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener