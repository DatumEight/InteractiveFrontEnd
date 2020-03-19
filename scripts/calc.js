function addition(numOne, numTwo) {
    if (typeof(numOne == "number") && typeof(numTwo) == "number") {
        return numOne + numTwo;
    }
    else {
        alert("Error!");
    }
}
calculator = function () {
    this.value = 0;
};

calculator.prototype.add == function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    }
    else {
        alert("Error!");
    }
};

function whatCanIDrink (age){
    if(age < 1){
        return "Sorry. I can't tell what drink because that age is incorrect!";
    }
    if(age < 14 && age > 1){
        return "Drink Toddy";
    }
    if(age < 18 && age > 14){
        return "Drink Coke";
    }
    if(age < 21 && age > 18){
        return "Drink Beer";
    }
    if(age < 130 && age > 21){
        return "Drink Whiskey"
    }
    else{
        return "Sorry i can't tell what drink because that age is incorrect!";
    }
};

function fizzBuzz(number) {
    if(number % 3 == 0 && number % 5 == 0){
        return "fizzBuzz";
    }
    if(number % 3 == 0){
        return "fizz";
    }
    if(number % 5 == 0){
        return "buzz";
    }
    else{
        return number;
    }
}