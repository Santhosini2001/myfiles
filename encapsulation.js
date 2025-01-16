class VehicleCl{
    // properties
    name;
    color;
    wheels;
    #regNumber; //private property
    // constructor fn  //to initialise values constructor fn is used
    constructor(name,color,wheels,number){                       //prototype property
        this.name= name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }
    //Private method
    #getNumber(number){
        return number;
    }
    // methods
    getDetails(){                        //prototype property(outside the class VehicleCl)
        console.log(`
            The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels.
            The registration number is: ${this.#getNumber(this.#regNumber)}
            `);
    }
}
const veh1 = new VehicleCl("Scooter","Grey",2, 8866);
console.log(veh1);
veh1.getDetails(); 
// veh1.#getNumber();  //private field must be declared in an enclosing class
