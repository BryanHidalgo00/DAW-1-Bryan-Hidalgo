let digit = prompt("put data in meters to convert to feet");
while (digit == null || /\D/.test(digit) || digit == "") {
    digit = prompt("You cannot enter letters or any other character that is not a number, please enter a valid number!");
};
let result = digit*3.28084;
document.write('<p class="result">' + result.toFixed(4) + '</p>'); 
document.write('<a class="again" href="./1-meters-to-feet.html">' + "Again?" + '</a>')
document.write('<p class="result">' + `You entered this digit: ${digit}` + '</p>'); 