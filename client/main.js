import { deleteStorage, getNode, getStorage, setStorage } from './lib/index.js';

const textField = getNode('#textField');
const deleteButton = getNode('button');

// 1. textField의 value값을 로컬스토리지에 저장해주세요.

// 2. 새로고침시(DOMContentLoaded) 로컬스토리지에 저장된 textField의 값을 가져와 뿌려줍니다.
// 새로고침이 일어났을 때
function handleTextField() {
  const value = this.value;
  setStorage('text', value);
}

function init() {
  getStorage('text').then((res) => (textField.value = res));
  // res = result
}

function handleDelete() {
  deleteStorage('text');
  // console.log(getStorage('text'));
}

deleteButton.addEventListener('click', handleDelete);
textField.addEventListener('input', handleTextField);

window.addEventListener('DOMContentLoaded', init);
