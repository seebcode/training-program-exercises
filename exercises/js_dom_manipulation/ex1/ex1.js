console.log("Yay! The javascript is running")

// Cat picture source
// https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg
document.querySelector("#name").innerText = "Seb";
document.querySelector("#bigger").style.color = "green";
document.querySelector("#bigger").style.fontSize = "100px";
document.querySelector('img').src = "https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp";

const squares = document.getElementsByClassName("square");
for (const square of squares) {
  square.style.display = "unset";
}
