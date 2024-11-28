function timeConverter(event) {
    event.preventDefault()
    
    const unitInput = parseFloat(document.querySelector("#unitInput").value);

    const unitFrom = document.querySelector("#unitFrom").value;
    
    const unitTo = document.querySelector("#unitTo").value;

    let displayResult = document.querySelector("#displayResult");


    if (unitFrom === "SEC" && unitTo === "MIN") {
        displayResult.textContent = unitInput / 60;
    } else if (unitFrom === "SEC" && unitTo === "HOUR") {
        displayResult.textContent = unitInput / 3600;
    } else if (unitFrom === "MIN" && unitTo === "SEC") {
        displayResult.textContent = unitInput * 60;
    } else if (unitFrom === "MIN" && unitTo === "HOUR") {
        displayResult.textContent = unitInput / 60;
    } else if (unitFrom === "HOUR" && unitTo === "SEC") {
        displayResult.textContent = unitInput * 3600;
    } else if (unitFrom === "HOUR" && unitTo === "MIN") {
        displayResult.textContent = unitInput * 60;
    } else {
        displayResult.textContent = "Velg to ulike tidsenheter";
        displayResult.style.color = "maroon";
    }
}

const convertButton = document.querySelector("#convertButton");

convertButton.addEventListener("click", timeConverter);