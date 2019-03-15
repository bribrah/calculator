function operate(num1,num2,operation){
    if (operation == "+"){
        return num1 + num2;
    }
    else if (operation == "-"){
        return num1-num2;
    }
    else if (operation == "x"){
    return num1*num2;
    }
    else if (operation == "/"){
        if (num2 == 0){
            return "Burn in hell!";
        }
        quotient = num1 / num2
        return quotient;
    }
}


let screen = document.querySelector(".screen");
let numberButtons = document.querySelectorAll(".number")
let operatorButtons = document.querySelectorAll('.operator');
let topScreen = document.querySelector(".topScreen");

let screenInput = 0;

function inputNumber(){
    if (result != null){
        result = null;
        screen.textContent = "";
    }
    screen.textContent += this.innerHTML;
    topScreen.textContent += this.innerHTML;
    screenInput += this.innerHTML;
    operatorEnteredLast = false;
    
}

let num1 = 0;
let num2 = 0;
let result = null;
let operator = ""
let operatorEntered = false;
let operatorEnteredLast = false;
function pressOperate(){
    if (this.innerHTML == "="){
        if (operatorEntered == true){
            num2 = +screenInput;
            result = operate(num1,num2,operator);
        }
        else{
            result = screen.textContent;
            console.log(result)
        }
        console.log("num1:" + num1);
        console.log("num2: " + num2);
        console.log("operator: " + operator)
        
        screen.textContent = result;
        operatorEntered = false;
        num1 = 0;
        num2 = 0;
        screenInput = "";
        operator = "";
        topScreen.textContent = "";
    }
    
    else if (this.innerHTML == "Clear"){
        screen.textContent = "";
        operatorEntered = false;
        num1 = 0;
        num2 = 0;
        screenInput = "";
        operator = "";
        topScreen.textContent = "";
    }
    else if(topScreen.textContent == "" || operatorEnteredLast == true){
        return;
    }
    else if (this.innerHTML == "Del"){
        screen.textContent= screen.textContent.substring(0,screen.textContent.length - 1);
        if(topScreen.textContent[topScreen.textContent.length - 1].match(/\d/) != null){
            topScreen.textContent= topScreen.textContent.substring(0,topScreen.textContent.length - 1);
            screenInput = screenInput.substring(0,screenInput.length-1);
        }
    }
    else if (operatorEntered == true || num1 !=0){
        num2=+screenInput;
        console.log("num1:" + num1);
        console.log("num2: " + num2);
        console.log("operator: " + operator);
        result = operate(num1,num2,operator);
        console.log(result);
        screen.textContent = result;
        
        num1 = result;
        num2= 0;
        screenInput = 0;
        operator = this.innerHTML;
        topScreen.textContent = result + operator;
}
    else{
        num1 = +screenInput;
        screenInput = "";
        screen.textContent = "";
        operator = this.innerHTML;
        operatorEntered = true;
        topScreen.textContent += this.innerHTML;
    }
    if (this.innerHTML != "Del" ){
        operatorEnteredLast = true;
    }
}
    

operatorButtons.forEach((operator) =>{
    operator.addEventListener('click',pressOperate);
});

numberButtons.forEach((button) => {
    button.addEventListener('click', inputNumber);
});



