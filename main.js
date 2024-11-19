// let, const

// const age = 30;
// age = 31;

// console.log(age);


// String, Numbers, Boolean, null, undefined


// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined
// let z;

// console.log(typeof name);

// Concatenation

// const name = 'John';
// const age = 30;

// console.log('My name is ' + name + ' and I am ' + age);

// // Template String
// // console.log(`My name is ${name} and I am ${age}`);
// const hello = `My name is ${name} and I am ${age}`;

// console.log(hello)

// const s = 'technology, computers, it, code';

// console.log(s.split(', '));

// Arrays - variables that hold multiple values

/* mutli
line
comment */

// const numbers = new Array(1,2,3,4,5);

// const fruits = ['apples', 'oranges', 'pears', 10, true];

// fruits[3] = 'grapes';

// fruits.push('mangoes');

// fruits.unshift('strawberries');

// fruits.pop();

// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: 'Ouano',
//         city: 'Mandaue',
//         state: 'Cebu'
//     }
// }

// console.log(person.firstName, person.lastName, person.hobbies[1], person.address.city);

// const { firstName, lastName, address: {city} } = person;

// console.log(firstName, city);

// person.email = 'johndoe@gmail.com';

// console.log(person);


// Arrays of Objects

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isComplete: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isComplete: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isComplete: false
//     },
// ]


// console.log(todos[1].text);

// JSON format

// const todoJSONconvert = [
//     [
//         {
//            "id": 1,
//            "text": "Take out trash",
//            "isComplete": true
//         },
//         {
//            "id": 2,
//            "text": "Meeting with boss",
//            "isComplete": true
//         },
//         {
//            "id": 3,
//            "text": "Dentist appt",
//            "isComplete": false
//         }
//      ]
// ]

// const todosJSON = JSON.stringify(todos)

// console.log(todosJSON);

// For

// for(let i = 0; i <= 10; i++) {
//     console.log(`For loop Number: ${i}`);
// }

// // While
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;    
// }

// for(let i = 0; i < todos.length; i++)   {
//     console.log(todos[i].text);
    
// }

// for (let todo of todos) {
//     console.log(todo.text);
    
// }

//// forEach, map. filter

// todos.forEach(function(todo){
//    console.log(todo.text)
// });


// const todoText = todos.map(function(todo){
//     return todo.text
//  });

// const todoCompleted = todos.filter(function(todo){
//     return todo.isComplete == true;
//  });


// const todoCompleted = todos.filter(function(todo){
//     return todo.isComplete == true;
//  }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);

// const x = 6;
// const y = 11;

// if(x > 5 && y > 10){
//     console.log('x is more than 5 or y is more than 10');
    
// }   

// if(x > 5)   {
//     if(y > 10)  {

//     }
// }
// else if(x > 10){
//     console.log('x is greater than 10');
    
// }   

// else {
//     console.log('x is less than 10');
    
// }


// const x = 11;
// //                      true    false
// const color = x > 10 ? 'red' : 'blue';

// console.log(color);

// const x = 9;
// //                      true    false
// const color ='gren';


// switch (color)   {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }



// function addNums(num1, num2)    {
//     console.log(num1 + num2);
    
// }

// addNums(5, 5);

// function addNums(num1, num2)    {
//     return num1 + num2;
    
// }

// const addNums = (num1 = 1, num2 = 1) =>   {
//     console.log(num1 + num2);    
// }

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// const addNums = num1 => num1 + 5;


// // console.log(addNums(5, 5));

// // addNums(5, 5)

// console.log(addNums(5));

//  Constructor function

// function Person(firstName, lastName, dob)   {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function()  {
//         return this.dob.getFullYear();
//     }
//     // this.getFullName= function()    {
//     //     return `${this.firstName} ${this.lastName}`
//     // }
// }

// Person.prototype.getBirthYear = function()  {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// Class
// class Person {
//     constructor(firstName, lastName, dob)    {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear()  {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Instantiate object
// const person1 = new Person('John', 'Doe', '4-12-2002');
// const person2 = new Person('Mary', 'Smith', '3-12-2022');



// // console.log(person2.dob.);

// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());
// console.log(person2.getFullName());

// console.log(person1);
