let digit = prompt("put data in Yards to convert to inches");
while (digit == null || /\D/.test(digit) || digit == "") {
    digit = prompt("You cannot enter letters or any other character that is not a number, please enter a valid number!");
};
let result = digit*36;
document.write('<p class="result">' + result.toFixed(0) + '</p>'); 
document.write('<a class="again" href="./4-yards-to-inches.html">' + "Again?" + '</a>')
document.write('<p class="result">' + `You entered this digit: ${digit}` + '</p>'); 