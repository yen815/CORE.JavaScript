/* 

[readyState]

0: uninitialized
1: loading
2: loaded : 로딩 완료 상태
3: interactive
4: complete

*/

// 비동기 통신
// XHR callback

function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr; // 객체의 구조분해할당(매번 쓰는게 불편하니 매개변수처럼 쓰자)

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response)); // JSON.parse(response) -> string에서 array로 변환
      } else {
        onFail({ message: '에러가 발생했습니다.' });
        // console.log('통신실패!!');
      }
    }
  });

  xhr.send(JSON.stringify(body)); // post 통신 시 필요, 문자열로 변환해서 반환
}

// 구조분해할당 : 객체로 한 번에 받으면 순서 상관없이 사용 가능
// xhr({
//   method: 'GET',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail({ message }) {
//     console.log(message);
//   },
//   body: { name: 'tiger' },
// });

xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};
// console.dir(xhr);

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

// console.dir(xhr);

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
