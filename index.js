 //constructor function
function Vehicle(name,color,wheels){
    this.name= name;
    this.color = color;
    this.wheels = wheels;

    this.getDetails = function(){
        console.log(`
            The ${this.name} is ${this.color} in color.
            It has ${wheels} wheels
            `);
    };
}

const car = new Vehicle('Car', 'blue',4);             //new keyword creates an object //bind this to the object //return the object
car.getDetails();
console.log(car.hasOwnProperty('getDetails'));  // getDetails is inside the constructor fn

// class expression
// const Vehicle = class{

// }
// classes in JS ...is like functions only. 
// class declaration
class VehicleCl{
    // properties
    name;
    color;
    wheels;
    // constructor fn  //to initialise values constructor fn is used
    constructor(name,color,wheels){                       //prototype property
        this.name= name;
        this.color = color;
        this.wheels = wheels;
    }
    // methods
    getDetails(){                        //prototype property(outside the class VehicleCl)
        console.log(`
            The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels
            `);
    }
}

const veh1 = new VehicleCl("Scooter","Grey",2);
console.log(veh1);
veh1.getDetails(); 

console.log(veh1.hasOwnProperty('name'));
console.log(veh1.hasOwnProperty('getDetails'));

//example qn
/* const Dog = class{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} says woof`);
    }
}
const Cat = class{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} says meow!`);
    }
}
function createAnimal(type){
    if(type === "dog"){
        return new Dog("Buddy");
    }
    else if(type === "cat"){
        return new Cat("Whiskers");
    }
    else{
        return null;
    }
}
const d = createAnimal("dog");
d.speak(); */

function Vehicle(name,color,wheels){
    this.name= name;
    this.color = color;
    this.wheels = wheels;

    Vehicle.prototype.getDetails = function(){             
        console.log(`
            The ${this.name} is ${this.color} in color.
            It has ${wheels} wheels
            `);
    };
}

const car1 = new Vehicle('Car', 'blue',4);             //new keyword creates an object //bind this to the object //return the object
car1.getDetails();
console.log(car1.hasOwnProperty('getDetails')); 