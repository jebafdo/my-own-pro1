1 //  converts an array of strings to uppercase

var strings = ["hello", "world"];
var stringsUpper

 = [];

for (let i = 0; i < strings.length; i++) {
    stringsUpper[i] = strings[i].toUpperCase();
     }
    console.log(stringsUpper);


    2 //  create a new array that only contains the even numbers
    

function evennum(){

const numbers = [1, 2, 3, 4, 5, 6];
const evennumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (i % 2 === 0) {
            evennumbers.push(num);
        }
    }

            console.log(evennumbers);
}  

3 //  removes all the empty strings from an array of strings.

    strings = ["hello","","world","","javascript"];
    cleanedstrings = removeEmptystrings(strings);

    function removeEmptystrings(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== ""){
            result.push(array[i]);
        }
    }
    return result;
}
    console.log(cleanedstrings);


5 // user needs the sum of squared numbers in this array.


    const array = [4, 'hello', 3, true, 'Uki', 5];

    let sumOfSquares = 0;

    for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
    sumOfSquares += array[i] * array[i];
     }
}

    console.log(sumOfSquares);


6 // returns a new array with the elements in reverse order.


let originalArray = [1,2,3,4,5];
let reversedArray = reverseArray(originalArray);

function reverseArray(array){
    return array.slice().reverse();
}
console.log(reversedArray);


7 // Create a function createPerson that returns an object representing a person with
// properties name, age, and a method greet that logs a greetinmessage something like
// "Hello, my name is John and I am 25 years old." 

const person = createPerson('John', 25);
person.greet(); 

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${name} and I am ${age} years old.`);
        }
    };
}


8 // Write a function getHighGrades that takes an array of student objects (each with name
//and grade properties) and returns an array of names of students with grades higher than 80.

    const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 85 }
];

    function getHighGrades(students) {
    const highGrades = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade > 80) {
            highGrades.push(students[i].name);
        }
    }
    return highGrades;
}
    console.log(getHighGrades(students));

// Another Method // 8 //

const student = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 85 }
];

function getHighGrades(students) {
    return students.filter(student => student.grade > 80).map(student => student.name);
}
    console.log(getHighGrades(students));



11 // Write a JavaScript code to check if a variable score is passing (>=50), and print "Pass" if true,
// otherwise print "Fail".

function FindScore(){
    score = 50;

    if(score >= 50){
        console.log("Pass")
    }else{
        console.log("Fail")
    }
}

12 //  Write a JavaScript code to categorize a variable grade into "Excellent" (>=90), "Good"
// (>=75), "Average" (>=50), and "Poor" (<50).

function FindGrade(){
    var mark = 50;

    if(mark >= 90){
        console.log("Excellent")

    }else if(mark >=75 && mark < 90){

        console.log("Good")

    }else if(mark >= 50 && mark < 75){

        console.log("Average")
    }else if(mark <50){

        console.log("Poor")
    }
}


13 //  Write a function addTask that takes an array of tasks and a task to add to the list. The
// function should return the updated array of tasks.

    const tasks = ['Buy groceries', 'Clean the house'];

    function addTask(tasks, newTask) {

    tasks.push(newTask);
    return tasks;

    }

    console.log(addTask(tasks, 'Pay bills'));






    
        
    


16 //  Write a function inventoryValue that takes an array of product objects (each with properties
// name, price, and quantity) and returns the total value of the inventory.
// javascript


    const products = [
        {name: 'Laptop', price: 1000, quantity: 5},
        {name: 'Phone', price: 500, quantity: 10}
    ];

    
    function InventoryValue(){
        let totalcost = 0;
        
    for(let i = 0; i < products.length; i++){
        
    totalcost += products[i].price * products[i].quantity;

    }
    
    return totalcost;
    }
    console.log(InventoryValue(products));



    // other method reduce method


    function InventoryValue(products){
        return products.reduce((total,product) => total + (product.price * product.quantity), 0); 
    }

    const product = [
        {name: 'Laptop', price: 1000, quantity: 5},
        {name: 'Phone', price: 500, quantity: 10}
    ];
    console.log(InventoryValue(products));




17 //  Write a function applyDiscount that takes a price and a discount percentage, and returns the
// price after the discount has been applied. Use default parameters to set the discount
// percentage to 10% if not provided.


function applyDiscount(price, discount = 10) {
    const discountAmount = (discount / 100) * price;
    return price - discountAmount;
}

console.log(applyDiscount(100)); 
console.log(applyDiscount(100, 20));

    




















    