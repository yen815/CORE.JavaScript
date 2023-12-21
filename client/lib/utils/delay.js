import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './typeOf.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = '0px';
//     });
//   });
// });

// promise API

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '아싸 성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

// delayP는 promise 객체를 내보내는 함수
// 성공하면 resolve, 실패하면 reject (이름이 정해진건 아니라 바꿀 수 있고, 순서만 정해져 있다)
// 원본을 훼손하지 않기 위해 defaultOptions을 config에 담아서 구조분해할당으로 사용

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        // reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP({
  timeout: 1000,
  shouldReject: true,
});

// delayP(false)
//   .then((res) => {
//     console.log(res);
//     return delayP();
//   })
//   .then((res) => {
//     console.log(res);
//     return delayP();
//   })
//   .then((res) => {
//     console.log(res);
//     return delayP();
//   })
//   .then((res) => {
//     console.log(res);
//     return delayP();
//   })
//   .then((res) => {
//     console.log(res);
//     return delayP();
//   });

// console.log(delayP(false));

// promise object

/* -------------------------------------------------------------------------- */
/*                                async, await                                */
/* -------------------------------------------------------------------------- */
// async - 함수가 promise 객체를 반환하도록 만들어준다.
//       - await 사용 -> promise 객체만 있다면 사용 가능

// await - 코드의 실행 흐름 제어 가능(멈춤)
//       - result 값 가져오기 가능

async function delayA(data) {
  return data;
}

const value = await delayA('이슬기나');

// value.then((res) => {
//   console.log(res);
// });

// console.log(value);

async function 라면끓이기() {
  const 물 = await delayP({ data: '물' });
  console.log(물);

  const 스프 = await delayP({ data: '스프' });
  console.log(스프);

  const 면 = await delayP({ data: '면' });
  console.log(면);

  const 그릇 = await delayP({ data: '그릇' });
  console.log(그릇);

  // delayP({data:'물'})
  // .then((res)=>{
  //   console.log( res );

  //   return delayP({data:'스프'})
  // })
  // .then((res)=>{
  //   console.log( res );
  //   return delayP({data:'면넣기'})
  // })
  // .then((res)=>{
  //   console.log( res );
  //   return delayP({data:'그릇에담기'})
  // })
  // .then((res)=>{
  //   console.log( res );
  // })

  // console.log('물넣기');
  // console.log('스프넣기');
  // console.log('면넣기');
  // console.log('그릇에담기');
}

// 라면끓이기();

// async function getData() {
//   const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/3');
//   console.log(data.sprites['front_default']);
// }

// getData();
