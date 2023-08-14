const tb = document.querySelector("main table")
let url = "https://northwind.vercel.app/api/suppliers/"
const btn = document.querySelector("button")

fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            tb.innerHTML += `
        <tbody>
        <tr>
        <td>${element.id}</td>
        <td>${element.companyName}</td>
                    <td>${element.contactName}</td>
                    <td>${element.contactTitle}</td>
                    <td>
                    <button onclick="deleteCompany(${element.id})">Delete</button>
                    <button onclick="detailCompany(${element.id})"><a href="../Detail/detail.html">Detail</a></button> 
                    </td>
                    </tr>
                    </tbody>
                    `
        });
    })

function deleteCompany(param) {
    fetch(url + param, {
        method: "DELETE"
    })
    console.log(param);
}
