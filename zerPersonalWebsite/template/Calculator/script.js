//  CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    if (display.value === "") {

        display.value = "";

    }else{
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";
            console.log("display.value = ", display.value);
        }
    }
}