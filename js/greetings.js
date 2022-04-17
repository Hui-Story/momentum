const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 표기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 함수가 호출될 때 사용된 event를 인자로 받음 (여기서는 "SubmitEvent")
// console.log(event)를 통해 event의 정보를 확인할 수 있음
function onLoginSubmit(event) {
  // event의 기본 동작을 중지
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // localStorage API 활용
  // 참고: https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username);
}

function paintGreetings(username) {
  // 백틱 기호 활용
  // greeting.innerText = "Hello " + username; 와 동일
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 유저 정보가 없을 경우 loginForm을 표시
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
// 유저 정보가 있을 경우 greeting 표시
} else {
  paintGreetings(savedUsername);
}