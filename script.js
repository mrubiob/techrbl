var displayDiv = document.querySelector("#display");
displayDiv.innerText = "";
var cuenta = 0;

function press(number){
    console.log(number);
    displayDiv.innerText += number;
    cuenta = parseInt(displayDiv.innerText);
    console.log(cuenta);
   
}

function setOP(operacion){
    
    
}
