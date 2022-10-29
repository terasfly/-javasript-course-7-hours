let b = 'smothie';
console.log(b);

let someNumber = 45;
console.log(someNumber);



// let age = prompt('What is your age?');
// document.getElementById('sometext').textContent = age;

//Number in Javascript

let num1 = 10;
console.log(5 * 10);
num1 = num1 + 1;
console.log(num1);

//Increment /decrement by any number you want
num1 += 10;
console.log(num1);

//Functions


/*function fun() {
    alert('this is a function')

}
fun();

//lets create  a function that teake in a name and says
//hello followed by your name 

/*
For example:
Name: 'Tomas'
return: 'Hello Tomas'


function greeting(yourName) {
    let name = prompt('What is your name?')
    let result = `Hello ${yourName}${name}`
    console.log(result);

}
greeting(name)

function labas() {
    let vardas = prompt('koks vardas?');
    let atsakymas = `Labas kaip gyveni ${vardas}`;
    console.log(atsakymas);
    
}
*/
// labas()

// How do arguments work in Functions?
//How do we add 2 numbers togeter in a function?

function sumNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(result);

}
sumNumbers('Hello ', 'Tomas')

// Multiple times use for loops

for (let num = 0; num <= 100; num++) {
    console.log(num);

}
//Datatypes
let yourAge = 18; //number
let yourName = 'Tomas' // string
let name = { first: 'tomas', last: 'surininas' }; //object
let truth = false //boolean
let groceries = ['apple', 'banana', 'oranges'] // array
let random; //undefined
let nothing = null; //value null

//Strings!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1111

let fruit = 'banana,apple,orange';

let moreFruits = 'banana\napple'
console.log(moreFruits);

console.log(fruit.length)
console.log(fruit.indexOf('a'));
console.log(fruit.slice(2, 6));

console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit.split(',')); //split make to array


//Arrays??????????????????????????????????????????????????????????????????????????
let fruits = ['banana', 'apple ', 'orange', 'pineaples']
let fruitss = new Array('banana', 'apple ', 'orange', 'pineaples')

// alert(fruits[2]) //access value ofcourse can change value

fruits[0] = 'pear';
console.log(fruits);



for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}
//arrays common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '))
console.log(fruits.pop(), fruits); //removes last item
console.log(fruits.push('kriause'), fruits); // ass extra array
fruits[fruits.length] = 'naujas vaisius'
console.log(fruits)
fruits[4] = 'vel naujas'
console.log(fruits);

fruits.shift() //remove first element
console.log(fruits);

fruits.unshift('kiwi') //add to array first element
console.log(fruits);

console.log(fruits);
let vegetables = ['tomato', 'assparagus', 'cucmber']
let allGroceries = fruits.concat(vegetables) //add all arrays all togehter
console.log(allGroceries);
allGroceries.sort();
console.log(allGroceries)

console.log(allGroceries.slice(1, 4))
let someNumbers = [5, 4, 23, 556, 765, 32, 89, 9]
console.log(someNumbers.sort()); //is eiles su deda bet pagal pirma skaiciu

console.log(someNumbers.sort(function(a, b) { return a - b }))

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);

}
console.log(emptyArray.join('*'))

let names = ['tom', 'mat', 'kestas', 'laura'];
// names.slice(1, 2);
console.log(names.push('medis'))
console.log(names)

//objects!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let student = {
    first: 'Rafei',
    last: 'Qazi',
    age: 25,
    height: 170,
    studentInfo: function() {
        return `${this.first}  ${this.last} ${this.age}`
    }
};
console.log(student.first);
console.log(student.first);
console.log(student.last);
console.log(student.age);

student.first = 'noRafei' //change value
console.log(student.first);
student.age++;
console.log(student.studentInfo())

///if else conditions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//18-35 is my target demographic
// let age = prompt('What is your age?');
// if ((age >= 18 && age <= 35)) {
//     const aa = ' its my12'
//     console.log(aa);




// } else {
//     console.log('its my audience');
// }


//Swith statement!!!!!!!!!!!!!!!!!!!!!11
switch (7) {


    case 6:
        text = 'weekend'
        break;
    case 7:
        text = 'weekend'

        break;

    default:
        text = 'weekday';
        break;
}

console.log(text);

////JSON¬!!!!!!!!!!!!!!!!!!!!!!111

[{
        'name': 'Tomas',
        'age': 38,
        'height': 174

    },
    {
        'name': 'Tom',
        'age': 30,
        'height': 170
    }
]