
var new_Number = prompt("Enter a number");

var newnumber = parseInt(new_Number);

var resultElement = document.getElementById("result");

if (newnumber % 2 == 0) {
    resultElement.innerHTML = `The number <span class="even">${newnumber}</span> is even.`;
} else {
    resultElement.innerHTML = `The number <span class="odd">${newnumber}</span> is odd.`;
}
