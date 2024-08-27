const display = document.getElementById("display")
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");



function updateScreen(input) {
display.value += input;
InputLimit()
}


function InputLimit(){
    const limit = 17;
    const textLength = display.value.length;
    
    if (textLength > limit) {
        display.style.fontSize = "15px"

        if (textLength > 23) {
            display.style.fontSize = "10px";
        }
    }else{
        display.style.fontSize = "20px"
    }
}

function clearScreen() {
    display.value= "";
}

function calculate() {
    try{
        if(display.value ===""){
            document.getElementById("display").style.border = "solid 2px red"
        }
        else{
            display.value = eval(display.value)
            if(display.value){
            
                document.getElementById("display").style.border = "none"
            }
        }
    }
    catch(err){
        console.log(err);
    }
}

