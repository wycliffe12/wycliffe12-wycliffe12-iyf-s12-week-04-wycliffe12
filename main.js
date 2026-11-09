
// =====================================
// TASK 7.1 - VARIABLE PRACTICE
// =====================================

// 1. Declare variables
const name = "Wycliffe";
const age = 25; // Change this to your actual age
const isStudent = true;
const favoriteColors = ["Blue", "Black", "White"];
const today = new Date();

// 2. Display the variables
console.log("My name is:", name);
console.log("My age is:", age);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);

// 3. Check data types using typeof
console.log("Name data type:", typeof name);
console.log("Age data type:", typeof age);
console.log("Student data type:", typeof isStudent);
console.log("Colors data type:", typeof favoriteColors);
console.log("Date data type:", typeof today);

// 4. Practice let
let score = 100;

console.log("Original score:", score);

score = 150;

console.log("Updated score:", score);

// 5. Practice const
const PI = 3.14159;

console.log("Value of PI:", PI);


// =====================================
// TASK 7.2 - EXERCISE 1: NUMBER OPERATIONS
// =====================================

const a = 10;
const b = 3;

// Basic mathematical operations
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment and decrement
let count = 0;

console.log("Original count:", count);

count++;

console.log("After increment:", count);

count--;

console.log("After decrement:", count);

// =====================================
// TASK 7.2 - EXERCISE 2: STRING OPERATIONS
// =====================================

const firstName = "Wycliffe";
const lastName = "Kamau";

// 1. Concatenation (joining strings)
const fullName = firstName + " " + lastName;

console.log("Full name:", fullName);

// 2. Template literals
const greeting = `Hello, ${firstName}!`;

const message = `${firstName} has ${firstName.length} letters.`;

console.log(greeting);
console.log(message);

// 3. String methods
console.log("Uppercase:", fullName.toUpperCase());

console.log("Lowercase:", fullName.toLowerCase());

console.log("First letter:", firstName.charAt(0));

console.log("Contains Wycliffe:", fullName.includes("Wycliffe"));

// =====================================
// TASK 7.2 - EXERCISE 3: COMPARISON
// =====================================

// Comparison operators
console.log("Is 5 greater than 3?", 5 > 3);

console.log("Is 5 less than 3?", 5 < 3);

console.log("Is 5 equal to 5?", 5 === 5);

console.log("Is 5 not equal to 3?", 5 !== 3);

// Logical operators
console.log("AND:", true && true);

console.log("OR:", true || false);

console.log("NOT:", !true);

// =====================================
// TASK 7.2 - CHALLENGE
// =====================================

// Calculate age in days
const ageInDays = age * 365;

// Calculate age in hours
const ageInHours = ageInDays * 24;

// Get current year
const currentYear = new Date().getFullYear();

// Calculate year you will turn 100
const yearTurn100 = currentYear + (100 - age);

// Display results
console.log("My age in days is approximately:", ageInDays);

console.log("My age in hours is approximately:", ageInHours);

console.log("I will turn 100 in the year:", yearTurn100);

// =====================================
// TASK 7.3 - EXERCISE 1: FUNCTION DECLARATION
// =====================================

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Call the function
console.log("Rectangle area:", calculateArea(10, 5));

// Function to greet a student
function greetStudent(studentName) {
    return `Hello, ${studentName}! Welcome to JavaScript.`;
}

console.log(greetStudent("Wycliffe"));

// Function to calculate the square of a number
function squareNumber(number) {
    return number * number;
}

console.log("Square of 6:", squareNumber(6));

// =====================================
// TASK 7.3 - EXERCISE 2: ARROW FUNCTIONS
// =====================================

// 1. Add two numbers
const add = (a, b) => {
    return a + b;
};

// 2. Subtract two numbers
const subtract = (a, b) => {
    return a - b;
};

// 3. Multiply two numbers
const multiply = (a, b) => {
    return a * b;
};

// 4. Divide two numbers
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
};

// Test the functions
console.log("Addition:", add(20, 10));
console.log("Subtraction:", subtract(20, 10));
console.log("Multiplication:", multiply(20, 10));
console.log("Division:", divide(20, 10));
console.log("Division by zero:", divide(20, 0));

// =====================================
// TASK 7.3 - EXERCISE 1
// THREE WAYS OF WRITING FUNCTIONS
// =====================================

// 1. Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Function expression
const add = function(a, b) {
    return a + b;
};

// 3. Arrow function
const multiply = (a, b) => a * b;

// 4. Arrow function with a body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
};

// Testing the functions
console.log(greet("Wycliffe"));
console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));
console.log("Division by zero:", divide(10, 0));

// =====================================
// TASK 7.3 - EXERCISE 2
// BUILD FIVE FUNCTIONS
// =====================================

// 1. Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 3. Check whether a number is even
function isEven(number) {
    return number % 2 === 0;
}

// 4. Get initials from a full name
function getInitials(fullName) {
    return fullName
        .trim()
        .split(" ")
        .filter(name => name.length > 0)
        .map(name => name.charAt(0).toUpperCase())
        .join("");
}

// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// TESTING THE FIVE FUNCTIONS

console.log("Rectangle area:", calculateArea(10, 5));

console.log("Temperature:", celsiusToFahrenheit(25));

console.log("Is 10 even?", isEven(10));

console.log("Is 7 even?", isEven(7));

console.log("Initials:", getInitials("Wycliffe Kamau"));

console.log("Reversed word:", reverseString("JavaScript"));

// =====================================
// TASK 7.3 - EXERCISE 3
// DEFAULT PARAMETERS
// =====================================

// Function with default parameters
function greetDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Testing default parameters
console.log(greetDefault());

console.log(greetDefault("Alice"));

console.log(greetDefault("Bob", "Hi"));

console.log(greetDefault("Wycliffe", "Welcome"));

// Build a tip calculator
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

// Testing tip calculator
console.log("Default tip:", calculateTip(1000));

console.log("20% tip:", calculateTip(1000, 20));

console.log("10% tip:", calculateTip(2000, 10));

// =====================================
// TASK 7.4 - EXERCISE 1
// IF / ELSE STATEMENTS
// =====================================

function getGrade(score) {

    if (score >= 90) {
        return "A";

    } else if (score >= 80) {
        return "B";

    } else if (score >= 70) {
        return "C";

    } else if (score >= 60) {
        return "D";

    } else {
        return "F";
    }
}

// Testing the function
console.log("Score 95:", getGrade(95));
console.log("Score 85:", getGrade(85));
console.log("Score 75:", getGrade(75));
console.log("Score 65:", getGrade(65));
console.log("Score 45:", getGrade(45));

// =====================================
// TASK 7.4 - EXERCISE 2
// SWITCH STATEMENTS
// =====================================

function getDayName(dayNumber) {

    switch (dayNumber) {

        case 0:
            return "Sunday";

        case 1:
            return "Monday";

        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 4:
            return "Thursday";

        case 5:
            return "Friday";

        case 6:
            return "Saturday";

        default:
            return "Invalid day";
    }
}

// Testing the function
console.log("Day 0:", getDayName(0));
console.log("Day 1:", getDayName(1));
console.log("Day 3:", getDayName(3));
console.log("Day 5:", getDayName(5));
console.log("Day 7:", getDayName(7));

// =====================================
// TASK 7.4 - PROGRAM 1
// PRINT NUMBERS 1-100
// =====================================

console.log("NUMBERS FROM 1 TO 100");

for (let number = 1; number <= 100; number++) {

    console.log(number);

}

// =====================================
// TASK 7.4 - PROGRAM 2
// PRINT EVEN NUMBERS 1-50
// =====================================

console.log("EVEN NUMBERS FROM 1 TO 50");

for (let number = 1; number <= 50; number++) {

    if (number % 2 === 0) {

        console.log(number);

    }

}

// =====================================
// TASK 7.4 - PROGRAM 3
// FIZZBUZZ
// =====================================

console.log("FIZZBUZZ PROGRAM");

for (let number = 1; number <= 100; number++) {

    if (number % 3 === 0 && number % 5 === 0) {

        console.log("FizzBuzz");

    } else if (number % 3 === 0) {

        console.log("Fizz");

    } else if (number % 5 === 0) {

        console.log("Buzz");

    } else {

        console.log(number);

    }

}

// =====================================
// TASK 7.4 - PROGRAM 4
// TRIANGLE OF STARS
// =====================================

console.log("TRIANGLE OF STARS");

for (let row = 1; row <= 5; row++) {

    let stars = "";

    for (let column = 1; column <= row; column++) {

        stars += "*";

    }

    console.log(stars);

}
// ===================================
// LESSON 8 - TASK 8.1: ARRAYS
// ===================================

// Creating an array
const lesson8Fruits = ["Mango", "Orange", "Banana", "Apple"];

// Display the entire array
console.log("All fruits:", lesson8Fruits);

// Accessing individual items
console.log("First fruit:", lesson8Fruits[0]);
console.log("Second fruit:", lesson8Fruits[1]);

// Getting the number of items
console.log("Number of fruits:", lesson8Fruits.length);

// Adding items
lesson8Fruits.push("Pineapple");

console.log("After push:", lesson8Fruits);

// Adding an item at the beginning
lesson8Fruits.unshift("Watermelon");

console.log("After unshift:", lesson8Fruits);

// Removing the last item
lesson8Fruits.pop();

console.log("After pop:", lesson8Fruits);

// Removing the first item
lesson8Fruits.shift();

console.log("After shift:", lesson8Fruits);

// Array methods

const lesson8Numbers = [5, 12, -3, 8, 20, -1];

// forEach(): Goes through every item
lesson8Numbers.forEach(function(number) {
    console.log("Number:", number);
});

// map(): Doubles every number
const doubledNumbers = lesson8Numbers.map(number => number * 2);

console.log("Doubled numbers:", doubledNumbers);

// filter(): Keeps numbers that meet a condition
const positiveNumbers = lesson8Numbers.filter(number => number > 0);

console.log("Positive numbers:", positiveNumbers);

// find(): Finds the first number greater than 10
const firstAboveTen = lesson8Numbers.find(number => number > 10);

console.log("First number above 10:", firstAboveTen);

// reduce(): Adds all numbers together
const totalSum = lesson8Numbers.reduce((total, number) => total + number, 0);

console.log("Total sum:", totalSum);

// includes(): Checks whether an item exists
const hasTwenty = lesson8Numbers.includes(20);

console.log("Does the array contain 20?", hasTwenty);
// ===================================
// TASK 8.1 - ARRAY EXERCISES
// ===================================

// Exercise 1: Double all numbers
const exerciseNumbers = [2, 4, 6, 8, 10];

const doubled = exerciseNumbers.map(number => number * 2);

console.log("Exercise 1 - Doubled:", doubled);


// Exercise 2: Filter out negative numbers
const mixedNumbers = [10, -5, 20, -8, 30, -2];

const numbersWithoutNegatives = mixedNumbers.filter(number => number >= 0);

console.log("Exercise 2 - Without negatives:", numbersWithoutNegatives);


// Exercise 3: Find the first number greater than 10
const firstNumberAboveTen = mixedNumbers.find(number => number > 10);

console.log("Exercise 3 - First number above 10:", firstNumberAboveTen);


// Exercise 4: Calculate the product of all numbers
const productNumbers = [2, 3, 4, 5];

const product = productNumbers.reduce((result, number) => result * number, 1);

console.log("Exercise 4 - Product:", product);

// ===================================
// LESSON 8 - TASK 8.2: OBJECTS
// ===================================

// Creating a student object
const student = {
    name: "Wycliffe",
    age: 25,
    course: "JavaScript",
    country: "Kenya"
};

// Display the entire object
console.log("Student:", student);

// Accessing object properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
// Accessing properties using bracket notation
console.log("Name using brackets:", student["name"]);

// Changing an existing property
student.age = 26;

// Adding a new property
student.email = "wycliffe@example.com";

// Deleting a property
delete student.country;

// Display updated object
console.log("Updated student:", student);
// Accessing properties using bracket notation
console.log("Name using brackets:", student["name"]);

// Changing an existing property
student.age = 26;

// Adding a new property
student.email = "wycliffe@example.com";

// Deleting a property
delete student.country;

// Display updated object
console.log("Updated student:", student);
// Creating a nested object
const studentDetails = {
    name: "Wycliffe",
    age: 25,

    address: {
        city: "Nairobi",
        country: "Kenya",
        area: "Kasarani"
    }
};

// Accessing nested properties
console.log("City:", studentDetails.address.city);
console.log("Country:", studentDetails.address.country);
console.log("Area:", studentDetails.address.area);
// Object methods
const person = {
    firstName: "Wycliffe",
    lastName: "Kamau",

    // Method using a normal function
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },

    // Method using shorthand syntax
    greet() {
        return `Hello, my name is ${this.firstName}`;
    },

    // Method using an arrow function
    introduction: () => {
        return "Welcome to my JavaScript practice!";
    }
};

console.log("Full name:", person.fullName());
console.log(person.greet());
console.log(person.introduction());
// Object iteration
const employee = {
    name: "Wycliffe",
    position: "Intern",
    department: "Accounting",
    country: "Kenya"
};

// Object.keys(): Gets all property names
console.log("Property names:", Object.keys(employee));

// Object.values(): Gets all property values
console.log("Property values:", Object.values(employee));

// Object.entries(): Gets property names and values
console.log("Entries:", Object.entries(employee));

// Using a for...in loop
for (const key in employee) {
    console.log(key + ":", employee[key]);
}
// ===================================
// LESSON 8 - TASK 8.3: ARRAYS OF OBJECTS
// ===================================

const students = [
    {
        name: "Alice",
        grade: 92,
        major: "Computer Science"
    },
    {
        name: "Bob",
        grade: 75,
        major: "Business"
    },
    {
        name: "Charlie",
        grade: 55,
        major: "Computer Science"
    },
    {
        name: "Diana",
        grade: 85,
        major: "Accounting"
    },
    {
        name: "Eve",
        grade: 95,
        major: "Computer Science"
    }
];

console.log("All students:", students);
// Exercise 1: Get all student names

const studentNames = students.map(student => student.name);

console.log("Student names:", studentNames);

// ===================================
// LESSON 8 - TASK 8.4: JSON
// ===================================

// JSON data stored as a string
const studentJSON = '{"name":"Wanjiku","grades":{"math":88,"english":92}}';

// Convert JSON string into a JavaScript object
const studentData = JSON.parse(studentJSON);

// Display the object
console.log("Student data:", studentData);

// Access student information
console.log("Student name:", studentData.name);

// Access mathematics grade
console.log("Math grade:", studentData.grades.math);

// Access English grade
console.log("English grade:", studentData.grades.english);
// Convert JavaScript object into JSON string
const convertedJSON = JSON.stringify(studentData);

// Display JSON string
console.log("Converted JSON:", convertedJSON);

// Pretty-print JSON with indentation
const formattedJSON = JSON.stringify(studentData, null, 2);

console.log("Formatted JSON:", formattedJSON);
// Creating a JSON string containing posts
const postsJSON = `[
    {
        "title": "Learning JavaScript",
        "likes": 20,
        "published": true
    },
    {
        "title": "Understanding HTML",
        "likes": 30,
        "published": true
    },
    {
        "title": "Learning CSS",
        "likes": 15,
        "published": false
    },
    {
        "title": "Introduction to React",
        "likes": 50,
        "published": true
    }
]`;

// Convert JSON string into an array
const posts = JSON.parse(postsJSON);

console.log("All posts:", posts);
// Handling invalid JSON
const invalidJSON = '{"name": "Wycliffe", age: 25}';

try {
    const result = JSON.parse(invalidJSON);
    console.log("Parsed data:", result);
} catch (error) {
    console.log("JSON error:", error.message);
}
