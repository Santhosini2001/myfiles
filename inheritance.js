/* //inheritance in class
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

class Car extends VehicleCl{               
    constructor(color,brand,purpose){    
        super('car',color,4)                         //super constructor
        this.brand = brand;
        this.purpose = purpose;
    }
   
}
const car1 = new Car('Red','Audi','Luxury travelling');
console.log(car1);
car1.getDetails();    //not the property of car1 ,here getDetails is inheritance
console.log(car1.__proto__);



class CarOne extends VehicleCl{           
    constructor(color,brand,purpose){    
        super('car',color,4)                       //super constructor for child class
        this.brand = brand;
        this.purpose = purpose;
    }
   getDetails(){
    console.log(`
        The ${this.name} is ${this.color} in color of ${this.brand} company.
        It has ${this.wheels} wheels.It is for the ${this.purpose}.
        `)
   }
}
const car2 = new CarOne('Red','Audi','Luxury travelling');   //variables shd have unique names .these unique names are called identifiers
console.log(car2);
car2.getDetails();    //not the property of car1 ,here getDetails is inheritance
console.log(car2.__proto__); */


//-----------------------------Inheritance in constructor fn--------------------------------

function Vehicle(name,color,wheels){
    this.name= name;
    this.color = color;
    this.wheels = wheels;

    Vehicle.prototype.getVehDetails = function(){             
        console.log(`
            Name: ${this.name}\nColor: ${this.color}\nWheels:${this.wheels}
            `);
    };
}

function CarTwo(color, brand, seats){
    Vehicle.call(this,"car",'blue', 4);
    this.brand = brand;
    this.seats = seats;
}

CarTwo.prototype  = Object.create(Vehicle.prototype);


CarTwo.prototype.getDetails = function(){
    console.log(` 
        The ${this.color} ${this.name} is of ${this.brand} company.
        It has seating for ${this.seats} people.
        `);
};
const c1 = new CarTwo("blue",'Audi',5);
c1.getDetails();
console.log(c1);
console.log(c1.__proto__);

c1.getVehDetails();
























// const car1 = new Vehicle('Car', 'blue',4);             //new keyword creates an object //bind this to the object //return the object
// car1.getDetails();
// console.log(car1.hasOwnProperty('getDetails')); 