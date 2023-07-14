const btnlist = document.querySelectorAll("button")

btnlist.forEach(btn => {
    btn.addEventListener("click", () => {
        btnlist.forEach(btn => btn.classList.remove("active"))
        btn.classList.add("active");
    })
})