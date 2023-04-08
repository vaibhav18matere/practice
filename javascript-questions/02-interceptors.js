const origionalFetch = window.fetch;

window.fetch = async (...args) => {
  const updatedRequest = requestInterceptor(args);
  const response = await origionalFetch(...updatedRequest);

  const updatedResponse = responseInterceptor(response);

  return updatedResponse;
};

window.requestInterceptor = (args) => {
  console.log("from REQUEST interceptor");
  return args;
};

window.requestInterceptor = (res) => {
  console.log("from RESPONSE interceptor");
  return res.json();
};

fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
  console.log(res);
});

// Interceptors acts as a wall between client and server.
// we can handle the requests and response before
// .then() snd.catch() methods using it.

// 1. Request Interceptor - When request is sent from client to server,
//   then request gets intercepted and we can change the data,
//     headers etc as per the requirement.

// 2. Response Interceptor - When we get response from the server,
//   then we can check it, process it and perform some actions on it
//   and return back the response to client.
