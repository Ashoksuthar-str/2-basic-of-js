// Singleton
// Object.create
// Onject Literals

const mySym = Symbol("key1")

const jsUser ={
    name: "Ashok",
    "Full Name":"Ashok Kumar",
    [mySym]:"myKey1",
    age : 20,
    location:"Sirohi",
    email:"Sutharashok191@gmail.com",
    isLogged:false,
    lastLoginDays:["Monday","Friday"],
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser[mySym]);
console.log(jsUser["Full Name"]);

jsUser.email = "myNewEmail@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "Invalid@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(jsUser.greeting());
