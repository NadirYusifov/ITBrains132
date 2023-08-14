const detContent = document.querySelector("detail-content")
const detailItem = document.querySelector("detail-item")
const item = document.querySelector("item")
const adress = document.getElementById("Address")
const companyName = document.getElementById("Company Name")
const contactName = document.getElementById("Contact Name")
const contactTitle = document.getElementById("Contact Title")
const phone = document.getElementById("Phone")
const street = document.getElementById("Street")
const postalCode = document.getElementById("Postal Code")
const country = document.getElementById("Country")
const city = document.getElementById("City")
const region = document.getElementById("Region")

let url = "https://northwind.vercel.app/api/suppliers/"


let user  = localStorage.getItem("userid")
console.log(user);

function detailCompany() {
    fetch(url + user,{
        method: "GET"
    })

    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            item.innerHTML +=`

            `
        });
    })
}