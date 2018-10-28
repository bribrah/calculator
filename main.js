function operate(num1,num2,operation){
    if (operation == "+"){
        return num1 + num2;
    }
    else if (operation == "-"){
        return num1-num2;
    }
    else if (operation == "X"){
    return num1*num2;
    }
    else if (operation == "/"){
        quotient = num1 / num2
        return quotient;
    }
}


let screen = document.querySelector(".screen");
let numberButtons = document.querySelectorAll(".number")
let operatorButtons = document.querySelectorAll('.operator');

let screenInput = 0;

function inputNumber(){
    if (result != 0){
        result = 0
        screen.textContent = ""
    }
    screen.textContent += this.innerHTML;
    screenInput += this.innerHTML;
}

let num1 = 0;
let num2 = 0;
let result = 0;
let operator = ""
let operatorEntered = false;
function pressOperate(){
    if (this.innerHTML == "="){
        if (operatorEntered == true){
            num2 = parseInt(screenInput);
            result = operate(num1,num2,operator)          
        }
        else{
            result = screen.innerHTML;
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
        operator = ""
    }
    else if (operatorEntered == true || num1 !=0){
        num2=parseInt(screenInput);
        result = operate(num1,num2,operator);
        console.log(result);
        screen.textContent = result;
        num1 = result;
        num2= 0;
        screenInput = 0;
        operator = '';
        operatorEntered = false;
    }
    else{
        num1 = parseInt(screenInput);;
        screenInput = "";
        screen.textContent = "";
        operator = this.innerHTML;
        operatorEntered = true;
    }
}
    

operatorButtons.forEach((operator) =>{
    operator.addEventListener('click',pressOperate);
});

numberButtons.forEach((button) => {
    button.addEventListener('click', inputNumber);
});



