const btn = document.querySelector("button")
const tb = document.querySelector("table")

btn.addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then((data) => {
            data.results[0]
            data.results.forEach(data => {
                tb.textContent = data.results
                tb.innerHTML += ` 
                <img style="background-color: rgba(255, 255, 255, 0.222)" src="${data.picture.large}">
                <thead style="background-color: rgba(255, 255, 255, 0.222)">
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Email</th>
                <th>Country</th>
            </tr>
        </thead>
            <tbody style="background-color: rgba(255, 255, 255, 0.222)">
            <tr>
            <td>${data.name.first}</td>
            <td>${data.name.last}</td>
            <td>${data.dob.age}</td>
            <td>${data.email}</td>
            <td>${data.location.country}</td>
            </tr>
            </tbody>`
            })
        })
});