# 바닐라 JS로 크롬 앱 만들기

<br>

## \#1 - JAVASCRIPT

#### #1.1 - Basic Data Types

> · integar  :  1  
> · float  :  0.1  
> · string  :  "hello"  'hello'  
> · "ni" + "co"  →  "nico"  (string은 '+'로 연결 가능)

#### #1.2 - Variables (const & let)

> · const  :  변하면 안되는 값을 저장 (기본적으로 사용,  업데이트할 시 에러가 발생)  
> · let  :  변할 수 있는 값을 저장  
> · ~~var  :  변할 수 있는 값을 저장~~ (사용하지 말 것)

```js
const a = 5;
const b = 2;
let myName = "jh";

myName = "hj";  // let 값은 변경 가능
console.log(typeof a);  // typeof로 variable의 type 확인 가능
```

#### #1.3 - Booleans

> · true / false  :  참 / 거짓을 표현 (소문자로 작성)  
> · null  :  아무것도 없는 상태 (자연적으로 정의되지 않음, 값이 주어졌는데 그 값이 "비어있음")  
> · undefined  :  아무것도 정의되지 않음 (값이 정의되지 않음)

```js
const amIFat = null;  // null
let something;  // undefined

typeof amIFat  // object
typeof something  // undefined
```

#### #1.4 - Arrays

> · 시작과 끝은 대괄호([]) 를 사용하고, 각각의 항목은 쉼표로 분리됨

```js
const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");  // push로 값 추가
toBuy[2]  // array의 값에 접근 (크기 밖의 index로 접근하는 경우 undefined 반환)
```

#### #1.5 - Objects

> · 시작과 끝은 중괄호 ({}) 를 사용  
> · 오브젝트 내에서는 (:) 를 사용하여 property를 정의하며, 밖에서 property 업데이트도 가능  
>  (const로 정의된 object라도 property는 업데이트 가능)  
> · 주로 값에 설명이 필요한 경우에 사용

```js
const player = {
    name: "jh",
    points: 10,
    fat: false,
};
player.points = 20;  // property 업데이트
player.points = player.points + 15;  // property를 조회한 뒤 업데이트 가능
player.lastName = "potato";  // property 추가
player = 20;  // const로 정의된 object 자체를 업데이트하는 경우 오류 발생
```

#### #1.6 - Functions

> · function을 정의하여 코드의 중복을 최소화할 수 있음 (같은 기능을 반복하는 경우)  
> · 만들때 괄호 (()) 가 반드시 필요하고, argument(인자)를 받을 수 있음  
> · return을 통해서 값을 반환할 수 있음

```js
// 함수 정의
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is" + nameOfPerson + " and I'm" + age)
};
sayHello("jh", 10);  // 함수 호출
sayHello("lynn", 21);
```

```js
// object 내에 함수 정의
const player = {
    name: "nico",
    sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you")
    },
};
player.sayHello("jh");  // object 내의 함수 호출
player.sayHello("lynn");
```

```js
// 함수에서 return을 통해 값을 반환
const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
}

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
```

#### #1.7 - Conditionals

> · if { } else if { } else  :  조건문 활용  
> · &&  :  AND 의미  
> · ||  :  OR 의미

```js
// prompt는 사용자에게 입력을 받는 창을 호출
// parseInt는 숫자 형태의 string을 int로 변환 (숫자 형태가 아니라면 NaN 반환)
const age = parseInt(prompt("How old are you?"));

// Conditionals 활용
// isNaN은 NaN일 경우 True, 그 외에는 False를 반환
if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age > 80) {
    console.log("You can do whatever you want.")
}
```



## #2 - JAVASCRIPT ON THE BROWSER

#### #2.1 - The Document Object

> · document  :  HTML을 가리키는 object

```js
console.dir(document)  // 'document' object의 정보 확인
console.log(document.title)  // .을 통해서 속성으로 접근
document.title = "Hi"  // HTML 변경도 가능
document.body
```

#### #2.2 - HTML in Javascript

> · getElementById  :  id를 활용하여 element에 접근 (하나의 element만 반환) 
> · getElementByClassName  :  class를 활용하여 elemenet에 접근  
> · getElementByTagName  :  Tag를 활용하여 element에 접근  
> · getElementByName  :  Name을 활용하여 element에 접근  
> · 'ClassName, TagName, Name'을 활용한 접근은 array를 반환

```html
# index.html

<body>
  <h1 class="hello" id="title" name="title-name">Grab me!</h1>
  <script src="app.js"></script>
</body>
```

```js
# app.js

const title = document.getElementById("title");
// 다음 3가지 접근은 array를 반환
// const title = document.getElementByClassName("hello");
// const title = document.getElementByTagName("h1");
// const title = document.getElementByName("title-name");

title.innerText = "Got you!";  // 찾은 element의 값 변경 (HTML 변경)

console.log(title.id);
console.log(title.className);
```

> · querySelector  :  CSS selector를 사용하여 첫 번째 element를 반환  
> · querySelectorAll  :  CSS selector를 사용하여 모든 element를 array로 반환

```js
# app.js

const title = document.querySelector("#title");
// const title = document.querySelector(".hello")
const h1_list = document.querySelectorAll("h1")

title.innerText = "Hello";
```

#### #2.3 - Events

> · addEventListener(type, listener[, options])  :  type 이벤트가 발생하면, listener 실행

```html
# index.html

<body>
  <div class="hello">
    <h1>Grab me 1! </h1>
  </div>
  <script src="app.js"></script>
</body>
```

```js
# app.js

const h1 = document.querySelector("div.hello:first-child h1")

console.dir(h1)  // property 중 on으로 시작하는 것은 event (on을 떼고 사용)

function handleTitleClick() {
  h1.style.color = "blue";  // element의 style에 접근하여 변경 가능
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";  // body는 바로 접근 가능
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

**Event 참고 : https://developer.mozilla.org/ko/docs/Web/API/HTMLElement**

#### #2.4 - CSS in Javascript

> · JavaScript에서 CSS 속성을 조회하고, 변경할 수 있음

```js
# app.js

// JavaScript에서 속성을 변환하는 방법

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;  // 현재 컬러를 저장
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;  // 실제 CSS에 newColor를 적용
}

h1.addEventListener("click", handleTitleClick);
```

> · 속성은 CSS에서 작업하고, JavaScript에서 Class를 부여할 수 있음  
> · classList  :  class들의 목록으로 작업할 수 있도록 허용 (contains, toggle 등 활용 가능) 

```html
# index.html

<body>
  <div class="hello">
    <h1 class="sexy-font">Click me!</h1>
  </div>
  <script src="app.js"></script>
</body>
```

```css
# style.css

h1 {
  color: cornflowerblue;
  /* color를 부드럽게 변경 */
  transition: color 0.5s ease-in-out;
}

.clicked {
  color: tomato;
}

.sexy-font {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
```

```js
# app.js

// 속성은 CSS에서 작업하고, JavaScript에서 해당하는 Class를 부여하는 방법

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

// toggle을 활용하여 간단하게 구현
// function handleTitleClick() {
//   h1.classList.toggle("clicked");
// }

h1.addEventListener("click", handleTitleClick);
```

