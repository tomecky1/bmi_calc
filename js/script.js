let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");

heightElement.addEventListener("input", () => {
    console.log(`Aktualny wzrost: ${heightElement.value} cm`);
});
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let height = heightElement.value;
    let weight = weightElement.value;
    let bmi = weight / ((height / 100) ** 2);
    console.log(`Aktualne twoje BMI wynosi: ${bmi.toFixed(2)}`);
    bmiElement.innerText = bmi.toFixed(2);


});
formElement.addEventListener("reset", (event) => {
    console.log("Formularz został zresetowany");
});