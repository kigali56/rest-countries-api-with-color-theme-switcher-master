
const countriesElem = document.querySelector(".Countries");
const dropdown = document.querySelector(".dropdown");
const dropeElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");



async function getCountry() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element);
    });
}

getCountry();

function showCountry(data) {
    const country = document.createElement("div");
    country.classList.add("country");
    country.innerHTML = `<div class="country-img">
    <img src="${data.flags.png}" alt="">
</div>
<div class="country-info">
    <h5 class="countryName">${data.name.common}</h5>
    <p><strong>Populaion:</strong>${data.population}</p>
    <p class="regionName"><strong>Region:</strong>${data.region}</p>
    <p><strong>Capital:</strong>${data.capital}</p>
</div>`
    countriesElem.appendChild(country);

    country.addEventListener("click", () => {
        showCountryDetail(data);
    })
    console.log("hello")
}



dropdown.addEventListener("click", () => {
    dropeElem.classList.toggle("showDropDown");
})


const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");

region.forEach(element => {
    element.addEventListener("click", () => {
        Array.from(regionName).forEach(elem => {
            if (elem.innerText.includes(element.innerText) || element.innerText == "All") {
                elem.parentElement.parentElement.style.display = "grid";

            } else {
                elem.parentElement.parentElement.style.display = "none";
            }

        })

    })
});


search.addEventListener("input", () => {
    Array.from(countryName).forEach(elem => {
        if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = "grid";

        } else {
            elem.parentElement.parentElement.style.display = "none";
        }
    })
});

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    moon.classList.toggle("fas")
})

const countryModal = document.querySelector(".countryModal");
function showCountryDetail(data) {
    countryModal.classList.toggle("show");
    countryModal.innerHTML = `<button class="back">Back</button>
    <div class="modal">
<div class="leftModal">
    <img src="${data.flags.png}" alt="">
</div>
<div class="rightModal">
    <h1>${data.name.common}</h1>
    <div class="modalInfo">
        <div class="innerLeft inner">
            <p><strong>Native Name:</strong>${data.name.nativeName}</p>
            <p><strong>population:</strong>${data.population}</p>
            <p><strong>Region:</strong>${data.region
            }</p>  
            <p><strong>Sub-region:</strong>${data.subregion}</p> 
        </div>
        <div class="innerRight inner">
            <p><strong>capital:</strong>${data.capital}</p>
            <p><strong>Top Level Domain:</strong>${data.tld[0]}</p>
            <p><strong>currencies:</strong>${data.currencies}</p> 
            <p><strong>Languages:</strong>${data.languages}</p>   
        </div>
    </div>
</div>
    </div>`;
    const back = countryModal.querySelector(".back");
   
    back.addEventListener("click", () => {
        countryModal.classList.toggle("show");
    })

}





