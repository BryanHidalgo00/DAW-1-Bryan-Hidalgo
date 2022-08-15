let digit = prompt("put data in Meters to convert to yards");
while (digit == null || /\D/.test(digit) || digit == "") {
    digit = prompt("You cannot enter letters or any other character that is not a number, please enter a valid number!");
};
let result = digit*1.094;
document.write('<p class="result">' + result.toFixed(3) + '</p>'); 
document.write('<a class="again" href="./7-meters-to-yards.html">' + "Again?" + '</a>')
document.write('<p class="result">' + `You entered this digit: ${digit}` + '</p>'); 