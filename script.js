let displayBox = document.getElementById("display");

function append(value) {
    displayBox.value = displayBox.value + value;
}

function clearDisplay() {
    displayBox.value = " ";
}

function deleteLast() {
    displayBox.value = displayBox.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(displayBox.value);
        displayBox.value = result;
    } catch (error) {
        displayBox.value = "Error";
    }
}