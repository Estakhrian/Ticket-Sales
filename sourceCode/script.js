let countrySelectBox = document.querySelector(".countrySelect")
let citySelect = document.querySelector(".citySelect")


let countriesData = {
    Iran: ["tabriz", "shiraz", "Isfahan", "Mashhad"],
    Turkey: ["Istanbul", "Ezmir", "Antaly", "Ankara"],
    US: ["New York", "Los Angles", "Washington", "San Diego"]
}

countrySelectBox.addEventListener("change", () => {

    if (countrySelectBox.value === "Please Select") {

        citySelect.innerHTML = ""
        citySelect.innerHTML += "<option>Select city</option>"
    } else {
        let mainCountryName = countrySelectBox.value
        let mainCountryCities = countriesData[mainCountryName]
        console.log(mainCountryCities)

        citySelect.innerHTML = ""

        mainCountryCities.forEach(function (city) {

            citySelect.innerHTML += "<option>" + city + "</option>"
        })
    }
})