let textArea = document.getElementById("textArea");
let button = document.getElementById("Button");

button.onclick = function() {
    let userEnteredValue = textArea.value;
    let userEnteredInput = localStorage.setItem("userEnteredValue", userEnteredValue);
}
let storedValue = localStorage.getItem("userEnteredValue");
if (storedValue === "null") {
    textArea.value = "null";
} else {
    textArea.value = storedValue;
}
