/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;


/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/js/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;

// http: 프로토콜(protocol)
console.log(location.pathName);

const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }


/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;


// 동기화 코드
function getCoords1(){
  let value;
  navigator.geolocation.getCurrentPosition((data)=>{
    value = data   
    console.log(  );
  })
  return value;
}

// 비동기 처리(Promise API) 코드
// 데이터를 받아오기 전까지 기다리는 것이다. 기다림이 끝나면 resolve 실행.
function getCoords(){

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data)=>{
      if(data){  
        const  {latitude:lat,longitude:long} = data.coords
        resolve({lat,long});
      }else{
        reject({message:'위치 서비스 동의 하세요'})
      }
    });
  })
}

navigator.mediaDevices.getUserMedia({video:true})
.then((stream)=>{
  console.log( stream );
  document.querySelector('#videoElement').srcObject = stream;
})

// console.log( );

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

// height: 모니터 사이즈
// availHeight : 브라우저 크기
// innerHeight : 브라우저 해상도 크기  === 100vh
// orientation : {
//   landscape : 풍경화  가로 (정방향)
//    portrait : 초상화 세로
// }

console.log(availHeight);

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

