// const instaUser = new Object()
const instaUser = {}
instaUser.id = "myId"
instaUser.name = "Ashok"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email:"123abc@gmail.com",
    fullName:{
        first:"Ashok",
        last:"suthar"
    },
}
// console.log(regularUser.fullName.first);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users =[
    {
        id:1,
        email:"1111@email.com"
    },
    {
        id:1,
        email:"1111@email.com"
    },
    {
        id:1,
        email:"1111@email.com"
    },
    {
        id:1,
        email:"1111@email.com"
    },
]

users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty("isLoggedIn"));

// ******************** De-Structure and JSON API intro ********************

const course = {
    coursename:"Not get Bully",
    price:"678",
    courseInstructer:"Ashok"
}


// course.courseInstructer

const {courseInstructer:instructer} = course
console.log(instructer);
