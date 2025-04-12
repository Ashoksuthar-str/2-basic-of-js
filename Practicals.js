// Question 1
// Create an Array from 1 to 10
numArray = [1,2,3,4,5,6,7,8,9,10]
// Print first and last element 
console.log(numArray[0])
console.log(numArray.at(-1))



// Question 2
// Add element at first and last
myArray = ["llo ","Wor"]
// Push the element at last
myArray.push("ld")
// Add element at first and shift every element 1 step further
myArray.unshift("He")
console.log(myArray);



// Question 3
// Pop the last element
myArray.pop()
console.log(myArray);



// Question 4
myArray=["apple", "banana", "orange"]
// Store True or False if array consist banana
consist = (myArray.includes("banana"))
// Print the values based on if Banana is in Array
consist?console.log("It consist banana"):console.log("It don't consist banana");



// Question 5
// Create an Object "myCar"
myCar = {
    owner:"Mr. Bean",
    name:"British Leyland Mini 1000",
    model:"mark 4",
    year:1977,
}
console.log(myCar);



// Question 6
// Adding new Property Color
myCar.color = "green"
console.log(myCar);



// Question 7
// Create an object named person
person = {
    name:"John",
    age:23,
}
// Deleting age from Object person
delete person.age;
console.log(person);