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
    this.stomach.push(food)
  }
}








// 생성자 함수 