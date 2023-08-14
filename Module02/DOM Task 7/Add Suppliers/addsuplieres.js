const btnAdd = document.querySelector(".btn-success")
const addin = document.querySelector("input")
const val = document.querySelector("value")
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


btnAdd.addEventListener("click", addCompany)
    function addCompany() {

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type':"application/json"
            },
            body: JSON.stringify ({
                companyName: `${companyName.value}`,
                contactName: `${contactName.value}`,
                contactTitle: `${contactTitle.value}`,
                address:{
                    city: `${city.value}`,
                    region: `${region.value}`,
                    street: `${street.value}`,
                    postalCode: `${postalCode.value}`,
                    phone: `${phone.value}`,
                    country: `${country.value}`
                }
            }),
        })
        .then(res => {
            res.ok ? alert("Ugurla elave edildi") : alert("Emeliyyat ugursuz oldu.")
        })
    }