/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach:[], // 위?
  get eat(){
    return this.stomach;
  },
  set eat(food){
    // 먹으려면 stomach 위에 넣어줘야 한다.
    this.prey = food;
    this.stomach.push(food)
  }
}

const tiger = {
  pattern: '호랑이무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal
}

// tiger.__proto__ = animal



const 백두산호랑이 = {
  color: 'white',
  name: '포동이',
  __proto__: tiger
}





// 생성자 함수 

// 일반 함수 vs 생성자 함수

// function button(){

// }

// function button2(){

// }

// button() // 일반 함수
// new button2() // 생성자 함수 -> 무조건 객체를 반환


function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  this.getEat = function(){
    return this.stomach
  }

  this.setEat = function(food){
    this.prey = food;
    this.stomach.push(food)
  }
}

function Tiger(){
  Animal.call(this)
  this.pattern = '호랑이무늬'
  this.hunt = function(target){
    this.prey = target
    return `${target}에게 조용히 다가간다.`
  }
}

// static method 생성
Tiger.bark = function(){
  return '어흥!'
}

const 한라산호랑이 = new Tiger('포동이')
const 금강산호랑이 = new Tiger()





// const newAnimal = new Animal();


// console.log( newAnimal );



// function sum(a,b,c){
//   console.log(this);
// }



// sum.call('안녕',1,2,3)  // 바로 실행
// apply
// bind