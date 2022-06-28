console.log(locationsArray);

let theSampleButton = document.querySelector("#demoButton")
let theSampleUl = document.querySelector("#locations")

theSampleButton.addEventListener("click", function (event) {
    console.log(locationsArray);
    console.log(nationalParksArray);

    locationsArray.forEach((location) => {

        theSampleUl.innerHTML += `<li>${location}</li>`
    })

    theSampleUl.classList.remove("d-none");

})
