// img 폴더에 저장되어 있는 이미지 입력
const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// 랜덤으로 선택된 이미지 주소 입력
bgImage.src = `img/${chosenImage}`;

// body 에 생성된 img 태그를 입력
document.body.appendChild(bgImage);