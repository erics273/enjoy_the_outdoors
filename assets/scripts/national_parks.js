//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

let theSampleButton = document.querySelector("#theDemoButton")
let theSampleUL = document.querySelector("#locations")
let parkTypeUL = document.querySelector("#partTypes")
let parksUl = document.querySelector("#parks")

theSampleButton.addEventListener("click", function(event){
    console.log(locationsArray)
    console.log(nationalParksArray)
    console.log(parkTypesArray)


    locationsArray.forEach((location) => {
        theSampleUL.innerHTML += `<li>${location}</li>`
    })

    parkTypesArray.forEach((parkType) => {
        parkTypeUL.innerHTML += `<li>${parkType}</li>`
    })

    nationalParksArray.forEach((park) => {
        parksUl.innerHTML += `<li>${park.LocationName}</li>`
    })

    theSampleUL.classList.remove("d-none")

    parkTypeUL.classList.remove("d-none")

    parksUl.classList.remove("d-none")



})