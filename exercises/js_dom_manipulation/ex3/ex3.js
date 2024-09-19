// https://github.com/public-apis/public-apis?
// Alternative APIs

console.log("Exercise 3")

const main = document.querySelector("#display-box")

const button = document.querySelector("button")

button.addEventListener("click", () => {
    fetch("https://random.dog/woof.json")
        .then(resp => resp.json())
        .then(data => {
            console.log(data.url)
            main.innerHTML = `<img src="${data.url}">`
        })
})