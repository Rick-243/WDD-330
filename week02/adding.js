function add(){
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    output.innerHTML = `You entered: ` + input;
}

function numArg() {
    const input = document.getElementById("input2").value;
    const output = document.getElementById("output2");
    const inputInt = parseInt(input);
    if(inputInt !== NaN){
        output.innerHTML = `total: ` + sum(inputInt);
    }
}
function sum(number){
    let total = 0;
    for(let i = 1; i <= number; i++){
        total += i;
    }
    return total;
}
function final() {
    let input1 = parseFloat(document.getElementById("input").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let input3 = parseFloat(document.getElementById("input3").value);
    let  sum = input1 + input2 + input3;
    document.getElementById("output3").innerHTML = `the sum of the numbers you entered is: ` + sum;

}
// stretch solution
function getNum(numId){
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN){
      return numberFloat;
    } else return 0;
}
function updateTotal(value){
    const outputElement = document.getElementById('stretchOutput');
    outputElement.innerHTML = 'Total: ' + value;
}
// function declaration
function add2(num1, num2){
    return num1 + num2;
}
// function expression
const sub2 = function(num1, num2){
    return num1 - num2;
};
// arrow function
const mult2 = (num1, num2) => num1 * num2;

// example of using a callback to pull it all together
function performOperation(operation){
    // the argument 'operation' is a function...so when we are ready we can call that function in our code below
    const total = operation(
        getNum('stretchNumber1'),
        getNum('stretchNumber2')
);
updateTotal(total);
}
