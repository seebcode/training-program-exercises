console.log("Exercise 2")

const main = document.querySelector("#display-box")

document.getElementById("button1").onmouseleave = function() {changeHtml(1)};
document.getElementById("button2").onmouseleave = function() {changeHtml(2)};
document.getElementById("button3").onmouseleave = function() {changeHtml(3)};

let changeHtml = (buttonNumber) => {
  switch(buttonNumber) {
    case 1:
      document.querySelector('#display-box').innerHTML = document.querySelector('#text1').innerHTML;
      break;
    case 2:
      document.querySelector('#display-box').innerHTML = document.querySelector('#text2').innerHTML;
      break;
    case 3:
      document.querySelector('#display-box').innerHTML = document.querySelector('#text3').innerHTML;
      break;
  }
}