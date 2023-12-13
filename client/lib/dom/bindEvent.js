function handleClick(){
  console.log('클릭했습니다.');
}

function bindEvent(node,type,handler){

  if(typeof node === 'string') node = getNode(node);

  node.addEventListener(type,handler);

  return () => node.removeEventListener(type,handler)

}



const remove = bindEvent('.first','click',handleClick)


getNode('.second').addEventListener('click',remove)