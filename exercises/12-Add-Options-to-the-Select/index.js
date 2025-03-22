let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let addCountries = document.querySelector("#mySelect");


countries.forEach((country) => {
    let listCountries = document.createElement("option");
    listCountries.value = country;
    listCountries.text = country;
    addCountries.appendChild(listCountries);
});

addCountries.addEventListener("change", function(){
    let selectedCountry = addCountries.value;
    alert (selectedCountry);
});
