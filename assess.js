//NUMBER ELEVEN
let number = 5;
let factorial = 1;
let i;
for (i = 1; i <= number; i++) {
  factorial = factorial * i;
}
console.log("The factorial of " + number + " is: " + factorial);

//NUMBER TWELVE
function randomNumberBetween(a, b) {
  return Math.floor(Math.random() * (a - b + 1)) + b;
}
console.log(randomNumberBetween(1, 5));

//NUMBER THIRTEEN
let totalSeconds = 34542;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
console.log(hours + "h " + minutes + "m " + seconds + "s");

//NUMBER FOURTEEN
let number = 29;
let isPrime = true;
if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}

// NUMBER FIFTEEN
function capitalizeFirstLetterOfWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(
  capitalizeFirstLetterOfWords("my name is young modulus and i love coding")
);

//NUMBER SIXTEEN
let n = 15;
let sum = 0;
let i;
for (i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("The Sum Of Numbers From 1 to " + n + " Is:" + sum);

//NUMBER SEVENTEEN
let numbers = [12, 8, 11, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
let average = sum / numbers.length;
console.log("The average is: " + average);

// NUMBER EIGHTEEN
function removeTheDuplicates(array) {
  return [...new Set(array)];
}
let numbers = [1, 2, 2, 3, 4, 4, 5];
let newNumbers = removeTheDuplicates(numbers);
console.log(newNumbers);

//NUMBER NINETEEN
let i;
for (i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off!");

// NUMBER TWENTY
function isThisNumeric(word) {
  return !isNaN(word) && word.trim() !== "";
}
console.log(isThisNumeric("12345"));
console.log(isThisNumeric("123a5"));
console.log(isThisNumeric(""));
console.log(isThisNumeric("  123  "));

//NUMBER TWENTY-ONE
let numbers = [12, 8, 11, 9, 10];
let arrayOfNumbers = [...new Set(numbers)];
arrayOfNumbers.sort((a, b) => a - b);
let secondSmallest = arrayOfNumbers[1];
console.log("The second smallest number is:", secondSmallest);

//NUMBER TWENTY-TWO
number = 5;
let i;
for (i = 1; i <= 12; i++) {
  console.log(number + " x " + i + " = " + number * i);
}

//NUMBER TWENTY-THREE
function validatePassword(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasMinLength = password.length >= 8;
  return hasUppercase && hasLowercase && hasNumber && hasMinLength;
}
console.log(validatePassword("Modulus123"));
console.log(validatePassword("modulus"));
console.log(validatePassword("MODULUS123"));
console.log(validatePassword("Emmanuel15"));

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
console.log(calculator(25, 5, "+"));
console.log(calculator(25, 5, "-"));
console.log(calculator(25, 5, "*"));
console.log(calculator(25, 5, "/"));
console.log(calculator(25, 0, "/"));
console.log(calculator(25, 5, "%"));

//NUMBER TWENTY-FIVE
let number = 28;
console.log("Factors of " + number + " are:");
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

//NUMBER TWENTY-SIX

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

//NUMBER THIRTY