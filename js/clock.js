// "#clock" 만으로도 선택 가능
const clock = document.querySelector("h2#clock");

function getClock() {
  // Date 오브젝트를 통해 날짜 정보에 접근
  // 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
  const date = new Date();
  // padStart : 해당 길이에서 부족한 만큼 앞부분에 특정한 문자를 채움 (padEnd는 뒷부분에 채움)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 처음 호출했을 때 시간을 출력
getClock();
// 지정한 간격(ms)마다 function을 호출
setInterval(getClock, 1000);
// setTimeout : 지정한 시간(ms) 이후에 function을 1회 호출