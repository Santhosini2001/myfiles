 const user1 = {
    username: 'Saara',
    age:12,
    marks:{
        maths:20,
        eng:25
    }
};
/*
const user2 = user1;
console.log(user1);
console.log(user2);

user2.username = "Harry";
console.log(user2);
console.log(user1); */

/* 
//---------------------------shallow copy--------------------------------
const user2 = {...user1};  //spread operator
console.log(user2);
console.log(user1);

user2.username = 'Harry';
console.log(user2);
console.log(user1); */

//---------------------------- object.assign-----------------------------
const user2 = Object.assign({},user1);    //assign method
console.log(user2);
console.log(user1);

user2.username ="Harry";
user2.marks.maths = 10;
console.log(user2);
console.log(user1);
