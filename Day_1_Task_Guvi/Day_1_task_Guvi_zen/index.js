//Dot Notation and Bracket Notation
let person={
    nmae1:"Ravi",
    age:28,
    city:"Hyderabad",
    "12-34":"DoorNumber"
}
console.log(person.age)//28 Dot Notation
console.log(person["age"])//28 Bracket Notatio

//Note:- Invalid Key can be assesed by the Bracket Notation
//Note:- Invalid key cannot be assesed by the Bracket Notation

console.log(person["12-34"])// DoorNumber <=> output obtained
//console.log(person.12-34) <=> SyntaxError is obtained

