///// ANSWERS TO THE ASSIGNMENT QUESTIONS /////

// NUMBER 1
let myName = "Wilson Bright";
alert("My name is", myName);


// NUMBER 2
function sumTwoNumbers (a, b) {
    console.log(a + b)
}
sumTwoNumbers(10, 10)

function showTheirDifference (a, b){
    console.log(a - b)
}
showTheirDifference(10, 10)

function showTheirProduct (a, b){
    console.log(a * b)
}
showTheirProduct(10, 10)

function showTheirQuotient (a, b){
    console.log(a / b)
}
showTheirQuotient(10, 10)


// NUMBER 3
let oneDegreeCelsius = 1;
const oneDegreeFahrenheit =(oneDegreeCelsius * 9)/5 + 32;
console.log("Fahrenheit = ", oneDegreeFahrenheit)


// NUMBER 4
const areaOfRectangle = (length, width) => {
    return length * width;
}
console.log(areaOfRectangle(5, 10))


// NUMBER 5
let m = 20;
if(m % 2 == 0){
    console.log('even number')
}
else{
    console.log('odd number')
}


// NUMBER 6
let year = 2024;
let leapYear = year % 4 == 0;
if (leapYear) {
    console.log(year, " is a leap year.")
}
else {
    console.log(year, " is not a leap year.")
}


// NUMBER 8
function countingVowels(word) {
 let vowels = "aeiouAEIOU";
 let count = 0;
 for (let char of word) {
    if (vowels.includes(char)) {
        count++;
    }
  }
 return count;
}
console.log(countingVowels("Thank you Sir Michael Folarin, Thank you TechCrush"));


// NUMBER 9
let myArray = [7, 20, 9, 48, 10];
let largestNumber = Math.max(...myArray);
console.log( largestNumber);


// NUMBER 10
function isWordPalindrome(word) {
let reversed = word.split("").reverse().join(""); return word === reversed;
}
console.log(isWordPalindrome("MADAM"));
console.log(isWordPalindrome("TechCrush"));

// NUMBER ELEVEN
let number = 25;
let factorial = 1;
let i;
for (i = 1; i <= number; i++) {
  factorial = factorial * i;
}
console.log("The factorial of " + number + " is: " + factorial);

//NUMBER TWELVE
function randomNumberBetween(q, r) {
return Math.floor(Math.random() * (q - r + 3)) + r;
}
console.log(randomNumberBetween(10, 15));

//NUMBER THIRTEEN
let totalSeconds = 34542;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
console.log(hours + "h " + minutes + "m " + seconds + "s");

///NUMBER FOURTEEN
let number = 29;
let isPrime = true;
if (number <= 1) {
  isPrime = false;
}
 else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(number + " is a prime number.");
} 
else {
  console.log(number + " is not a prime number.");
}

// // NUMBER FIFTEEN
function capitalizeFirstLetterOfWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(
  capitalizeFirstLetterOfWords("i can't imagine the world without Jesus")
);

// NUMBER SIXTEEN
let n = 15;
let sum = 0;
let i;
for (i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("The Sum Of Numbers From 1 to " + n + " Is:" + sum);


//NUMBER SEVENTEEN
let numbers = [20, 25, 23, 26, 21];
let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
let average = sum / numbers.length;
console.log("The average is: " , average);

// NUMBER EIGHTEEN
function removeTheDuplicates(array) {
return [...new Set(array)];
}
let numbers = [1, 2, 2, 3, 4, 4, 5];
let newNumbers = removeTheDuplicates(numbers);
console.log(newNumbers);


// NUMBER NINETEEN
let i;
for (i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Tech Crush!");


// NUMBER TWENTY
function isThisNumeric(word) {
return !isNaN(word) && word.trim() !== "";
}
console.log(isThisNumeric("12345"));
console.log(isThisNumeric("123a5"));
console.log(isThisNumeric(""))
console.log(isThisNumeric("  123  "));


//NUMBER TWENTY-ONE
let numbers = [100, 10, 1];
let arrayOfNumbers = [...new Set(numbers)];
arrayOfNumbers.sort((a, b) => a - b);
let secondSmallest = arrayOfNumbers[1];
console.log("The second smallest number is:", secondSmallest);


// NUMBER TWENTY-TWO
number = 5;
let i;
for (i = 1; i <= 12; i++) {
  console.log(number + " x " + i , " = " , number * i);
}

//NUMBER TWENTY-THREE
function validatePassword(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasMinLength = password.length >= 8;
  return hasUppercase && hasLowercase && hasNumber && hasMinLength;
}
console.log(validatePassword("TechCrush100"));
console.log(validatePassword("techcrush"));
console.log(validatePassword("TECHCRUSH100"));
console.log(validatePassword("Mango123"));


//NUMBER TWENTY-FOUR
function calculator(number1, number2, operator) {
  if (operator === "+") {
    return number1 + number2;
  } else if (operator === "-") {
    return number1 - number2;
  } else if (operator === "*") {
    return number1 * number2;
  } else if (operator === "/") {
    return number2 !== 0
      ? number1 / number2
     : "Error!!! Cannot Be Divided By Zero";
  } else {
    return "Invalid Operation";
  }
}
console.log(calculator(81, 9, "+"));
console.log(calculator(81, 9, "-"));
console.log(calculator(81, 9, "*"));
console.log(calculator(81, 9, "/"));
console.log(calculator(81, 0, "/"));
console.log(calculator(81, 9, "%"));


//NUMBER TWENTY-FIVE
let number = 28;
console.log("Factors of " + number + " are:");
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

//NUMBER TWENTY-SIX
function isThisWordAnagram (word){
  return 
}
console.log(isThisWordAnagram ("listen, silent"))
console.log(isThisWordAnagram ("hello, world"))


//NUMBER TWENTY-SEVEN
let n = 10;
let fibonacci = [0, 1];
for (let i = 2; i < n; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log(
  "Fibonacci sequence up to " + n + " terms: " + fibonacci.slice(0, n)
);


//NUMBER TWENTY-EIGHT
function Sort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
let numbers = [5, 2, 9, 1, 5, 6];
console.log("Original Array:", numbers);
console.log("Sorted Array:", Sort(numbers));


//NUMBER TWENTY-NINE
function countNumberOfOccurrence(array, element) {
  let count = 0;
  for (let item of array) {
    if (item === element) {
      count++;
    }
  }
  return count;
}
let numbers = [1, 2, 3, 2, 4, 2, 5];
let elementToCount = 2;
console.log(
  "The element " +
    elementToCount +
    " appears " +
    countNumberOfOccurrence(numbers, elementToCount) +
    " times."
);