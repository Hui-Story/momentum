const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // stringify : 어떤 형태이든 string 형태로 변환
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  // event.target인 button의 부모 li 선택
  const li = event.target.parentElement;
  li.remove();
  // filter 내의 함수를 화살표 함수로 표현
  // 삭제되는 li 태그의 id 값과 일치하지 않는 Todo 데이터만 반환
  // parseInt : string 형태를 int 형태로 변환
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 변경된 toDos를 localStorage에 적용
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  // li 태그에 Todo의 id 값을 부여
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  // Todo 입력창 초기화
  toDoInput.value = "";
  // Todo를 id 값을 가진 object로 저장
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // JSON.parse : string 형태를 array 형태로 변환
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
  // parsedToDos.forEach(sayHello);
}