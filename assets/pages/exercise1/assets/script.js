let digit = prompt("Put the estimated budget");
while (digit == null || /\D/.test(digit) || digit == "") {
    digit = prompt("You cannot enter letters or any other character that is not a number, please enter a valid number!");
};

let derma = [digit * 0.40, digit * 0.30, digit * 0.30]
document.write(
    '<p class="txt">'
    + "Dermatology: "
    + derma[0].toFixed(2) + "<br>"
    + "traumatology: "
    + derma[1].toFixed(2) + "<br>"
    + "Pediatrics: "
    + derma[2].toFixed(2)
    + '</p>');

document.write('<a class="again" href="./index.html">' + "Again?" + '</a>')
