let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Phosphophyllite-ed16c.jpg') {
      myImage.setAttribute('src', 'images/Phosphophyllite2.jpg');
    } else {
      myImage.setAttribute('src', 'images/Phosphophyllite-ed16c.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'フォス はいいよ、' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'フォス はいいよ、' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
