// Illustration of basic sum of numbers

let sumA = 12;
let sumB = 18;
console.log(sumA+sumB)



// illustration of a set of object

let nameAll = [];
nameAll[0] = "Favour";
nameAll[1] = "Godswill";
nameAll[2] = "Grace";
nameAll[3] = "Bright";
nameAll[4] = "Nsikak";
nameAll[5] = "Francis";

console.log(nameAll)
nameAll [6] ="Mike";
 console.log(nameAll)



// ARRAY

let agesInMyClass = [19, 20, 21, 22, 23];
console.log(agesInMyClass [1])
agesInMyClass.push(24);
console.log(agesInMyClass)
agesInMyClass.pop(0)
console.log(agesInMyClass)
agesInMyClass.shift(0)
console.log(agesInMyClass)
agesInMyClass.unshift(19)
console.log(agesInMyClass)
agesInMyClass.splice(0, 1)
console.log(agesInMyClass)



 // illustration of data type(boolean)

let x = 3
let y = 5
 console.log(x>y)



 // illustration of object

 const object = {
    name: 'Bright',
age: 23,
isMarried: false,
lovesGod: true
};
console.log(object)



// CONDITIONALS
// Voting criteria

let myAge = 23;
let legalAge = 18;

if (myAge >= legalAge){
    console.log('You are eligible')
}
else{
     console.log('You are not eligible')
}



// Bright's man choice

let complexion = 'Light';
let riches = true
let Godly = 'Yes'

let judeComplexion = 'Dark';
let judeRiches = true
let judeGodly = 'Yes'

if (judeComplexion == 'Light' && judeRiches){
    console.log("I will marry jude")}

  else if (judeGodly){
    console.log("I will still marry him")
  }  

  else{
   console.log('Make jude clear')
};


// Greeting

let hour = 18;
let presentHour = 12;
if (presentHour >= hour ){
    console.log('Good day')
}
else{
    console.log('Good evening')
}


//App access

let access1 = 'OWNER'
let access2 = 'ADMINISTRATOR'
let access3 = 'USER'

let jude = {
    name: 'Jude',
    age: 35,
    accessLevel : 'OWNER'
}

if(jude.accessLevel == access1){
     console.log('You are the owner, and you have access to all resources')
}
 else if(jude.accessLevel == access2){
     console.log('You are an administrator, and you have access to most resources')
}
else{
 console.log('You are a user, and you have limited access')
}

if(jude.accessLevel == access1){

    if(jude.age >= 30){
        console.log('He can take over the company')
    }
    else{
        console.log('He is too young')
    }
}

else {
    console.log('You are a user, and you have limited access')
}



// Functions

 function sumTwoNumber(x, y){

    console.log( x + y)
}
sumTwoNumber(65, 100)
sumTwoNumber(20, 10)
sumTwoNumber(40, 20)

function sumThreeNumber(x, y, z){
    return x + y + z
}



let summation = sumThreeNumber(3, 7, 90)

console.log('result from summation' , summation)


