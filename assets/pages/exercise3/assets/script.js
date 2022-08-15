let celcius = prompt("¡put a value in celsius!");
while (celcius == null || /\D/.test(celcius) || celcius == "") {
    celcius = prompt("You cannot enter letters or any other character that is not a number, please enter a valid number!");
};
document.write('<h1 class="result">'+ (celcius*1.8+32) + '</h1>')
document.write('<a class="btn" href="././index.html">'+ "Again?" + '</a>' )