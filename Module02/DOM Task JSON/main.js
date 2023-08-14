const txt = document.querySelector("span")
const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then((data)=>{
        txt.innerHTML = data.value
    })
})