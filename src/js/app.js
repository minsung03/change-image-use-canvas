let rangeVal = document.getElementById("control");
let rangeController = document.getElementById("rangeController");

rangeVal.addEventListener("input", () => {
    rangeController.innerHTML = rangeVal.value + "%";
    rangeVal.style.background = "linear-gradient(to right, dodgerblue 0%, dodgerblue "+ rangeVal.value +"%, #666 " + rangeVal.value + "%, #666 100%)";
});