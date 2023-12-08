/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


class Animal {
  constructor(name) {

    // for(let [key,value] of Object.entries(options)){
    //   this[key] = value
    // }
    // or
    // const {name,age} = options;
    // 구조 분해 할당
    // const {name,age = true} = options;
    


    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }

  get eat() {
    return this.stomach;
  }

  set eat(value) {
    this.prey = value;
    this.stomach.push(value);
  }
}

// const animal =  new Animal({name:'포동이',age:15});

class Tiger extends Animal{

  static options = {
    version: '1.0.0',
    company: 'like-lion',
    ceo:'---'
  }
  
  constructor(name){
    super(name)  // 상위 constructor(name) - Animal의 내용을 가져온다.
    this.pattern = '호랑이무늬'
  }

  static bark(){
    return '어흥!'
  }

  hunt(target){
    this.prey = target
    return `${target} 에게 조용히 접근한다.`
  }
}

const 한라산호랑이 = new Tiger('포동이')


const a = new Array()


class Array {
  
  constructor(){

  }

  static isArray(){

  }
  
  forEach(){

  }

  reduce(){

  }

  map(){

  }

}