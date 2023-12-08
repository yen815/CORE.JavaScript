// querySelector
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

// console.log(button);



// eventListener
// eventListener 이벤트 핸들러 => click : 객체, scroll : 객체
// e에서 객체를 받음

function timer(){

}

setTimeout(timer, 3000);
   
/* global gsap */

let isOpend = false;

function handleMenu(e){
  
  e.preventDefault()

  // 메뉴에게 is-active 클래스를 넣어준다.
  // 메뉴에게 클래스를 넣어 준다. is-active를
  // -> menu.classList.add('is-active')

  if(!isOpend){
    menu.classList.add('is-active');
    
    gsap.from('li',{x:30,opacity:0,stagger:0.2,onComplete(){
      console.log('end');
    }})

  }else{
    menu.classList.remove('is-active');
    
    gsap.set('li',{x:0,opacity:1})
  }

  isOpend = !isOpend;

  // menu.classList.toggle('is-active')
  // menu.classList.remove('is-active')



  // console.log(menu.classList)
  // console.log(e);
  // console.log('open!'); 
}


button.addEventListener('click',handleMenu)
// click했을 때 handleMenu가 알아서 자동으로 실행되도록 함




// Node.addEvent




// classList




// preventDefault


