/* gobal gsap */
import {
  yeeun,
  delayP,
  insertLast,
  changeColor,
  getNode as $,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

// xhrPromise.get('https://jsonplaceholder.typicode.com/users').then((res) => {
//   res.forEach((item) => {
//     insertLast(document.body, `<div>${item.name}</div>`);
//   });
// });

// [phase-1]
// 1. user 데이터를 fetch 해주세요.
// 2. 함수 안에 넣기
// 3. user 데이터 (이름만) 화면에 랜더링

const END_POINT = 'http://localhost:3000/users';

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    await delayP(100);

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    const response = await yeeun.get(END_POINT);
    const userData = response.data;

    userData.forEach((data) => renderUserCard(userCardInner, data));
    changeColor('.user-card');

    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: 0.1,
      // {
      //   from: 'end',
      //   each: 0.1,
      //   amount: 0.5,
      //   ease: 'power2.inOut',
      // },
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!article || !button) return;
  const id = article.dataset.index.slice(5);

  yeeun.delete(`${END_POINT}/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);

const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');

function handleCreate() {
  gsap.to('.pop', { autoAlpha: 1 });
}

function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
}

function handleDone(e) {
  e.preventDefault();

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  const obj = { name, email, website };

  yeeun.post(END_POINT, obj).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
