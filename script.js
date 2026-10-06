let firstValue = Number(document.getElementById("firstValue").value);
let secondValue = Number(document.getElementById("secondValue").value);

let operation = document.getElementById("operation").value;

 if (operation == "Add") {
    let result = firstValue + secondValue;
    document.getElementById("result").innerText = result;
}
else if (operation == "Subtract") {
    let result = firstValue - secondValue;
    document.getElementById("result").innerText = result;
}
else if (operation == "Multiply") {
    let result = firstValue * secondValue;
    document.getElementById("result").innerText = result;
}
else {
    let result = firstValue / secondValue;
    document.getElementById("result").innerText = result;
}

function calculate() {
    let firstValue = Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    let operation = document.getElementById("operation").value;

    if (operation == "Add") {
        let result = firstValue + secondValue;
        document.getElementById("result").innerText = result;
    }
    else if (operation == "Subtract") {
        let result = firstValue - secondValue;
        document.getElementById("result").innerText = result;
    }
    else if (operation == "Multiply") {
        let result = firstValue * secondValue;
        document.getElementById("result").innerText = result;
    }
    else {
        let result = firstValue / secondValue;
        document.getElementById("result").innerText = result;
    }
}