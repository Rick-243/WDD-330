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