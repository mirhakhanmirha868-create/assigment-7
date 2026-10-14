
 // 1. Empty array using literal notation
 var studentNames = [];

 // 2. Empty array using object notation
 var studentNames2 = new Array();
 
 // 3. Strings array
 var fruits = ["Apple", "Mango", "Banana"];
 
 // 4. Numbers array
 var numbers = [10, 20, 30, 40, 50];
 
 // 5. Boolean array
 var booleanValues = [true, false, true];
 
 // 6. Mixed array
 var mixedArray = ["Maham", 18, true, 25.5];

 
 
 // Q7: Education Qualifications in Pakistan

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Education Qualifications in Pakistan</h2>");
document.write("<ul>");

for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}

document.write("</ul>");


// Q8: Student Scores and Percentages

var students = ["Ali", "Sami", "Maham"];
var scores = [420, 380, 450];
var totalMarks = 500;

document.write("<h2>Student Scores and Percentages</h2>");

for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;

    document.write("Score of " + students[i] + " is " + scores[i] + "<br>");
    document.write("Percentage: " + percentage + "%<br><br>");
}


// Q9: Colors Array

var colors = ["Red", "Green", "Blue"];

document.write("<h2>Colors Array</h2>");
document.write("Original Array: " + colors + "<br><br>");

// a. Add color at beginning
var firstColor = prompt("Enter a color to add at beginning:");
colors.unshift(firstColor);
document.write("After adding at beginning: " + colors + "<br><br>");

// b. Add color at end
var lastColor = prompt("Enter a color to add at end:");
colors.push(lastColor);
document.write("After adding at end: " + colors + "<br><br>");

// c. Add two colors at beginning
colors.unshift("Yellow", "Purple");
document.write("After adding two colors: " + colors + "<br><br>");

// d. Delete first color
colors.shift();
document.write("After deleting first color: " + colors + "<br><br>");

// e. Delete last color
colors.pop();
document.write("After deleting last color: " + colors + "<br><br>");

// f. Add color at desired index
var index = +prompt("Enter index to add color:");
var newColor = prompt("Enter color name:");

colors.splice(index, 0, newColor);
document.write("After adding at index: " + colors + "<br><br>");

// g. Delete colors from desired index
var deleteIndex = +prompt("Enter index to delete colors:");
var deleteCount = +prompt("How many colors do you want to delete?");

colors.splice(deleteIndex, deleteCount);
document.write("After deleting colors: " + colors);


// q10
var scores = [320, 230, 480, 120, 500];

document.write("Scores: " + scores + "<br>");

scores.sort(function(a, b) {
    return a - b;
});

document.write("Sorted Scores: " + scores);

// Q11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(0, 3);

document.write("Cities: " + cities + "<br>");
document.write("Selected Cities: " + selectedCities);

// Q12


var arr = ["This ", " is ", " my ", " cat"];

var sentence = arr.join("");

document.write(sentence);


// Q13

var items = [];

items.push("Keyboard");
items.push("Mouse");
items.push("Monitor");

document.write("Array: " + items + "<br><br>");

document.write("Removed: " + items.shift() + "<br>");
document.write("Removed: " + items.shift() + "<br>");
document.write("Removed: " + items.shift());

// Q14

var items = [];

items.push("Keyboard");
items.push("Mouse");
items.push("Monitor");

document.write("Array: " + items + "<br><br>");

document.write("Removed: " + items.pop() + "<br>");
document.write("Removed: " + items.pop() + "<br>");
document.write("Removed: " + items.pop());

// Q15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");
