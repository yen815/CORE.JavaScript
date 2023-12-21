const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

// const response = await fetch(END_POINT); // method 안적으면 기본 get 통신

// console.log(await response.json());

export const yeeun = async (options) => {
  // mixin
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // console.log(restOptions);
  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

// const user = await yeeun({ url: END_POINT });

// console.log(user.data);

// yeeun.get()
// yeeun.post()
// yeeun.put()
// yeeun.delete()

yeeun.get = (url, options) => {
  return yeeun({
    url,
    ...options,
  });
};

yeeun.post = (url, body, options) => {
  return yeeun({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

yeeun.put = (url, body, options) => {
  return yeeun({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

yeeun.delete = (url, options) => {
  return yeeun({
    method: 'DELETE',
    url,
    ...options,
  });
};
