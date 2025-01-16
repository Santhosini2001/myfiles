const user1 = {
    username: 'Saara',
    age:12,
    marks:{
        maths:20,
        eng:25
    },
    gerMarks(){
        console.log(this.marks);
    }
};

const user2 = JSON.parse(JSON.stringify(user1));
user2.username ="Harry";
user2.marks.maths = 10;
console.log(user2);  //JSON can't have any methods,expressions,date Objects//Json won't work in these cases
console.log(user1); 