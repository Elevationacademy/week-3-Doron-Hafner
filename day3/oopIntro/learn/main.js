// // ==================== sc1 ====================
// class Animal {
//     constructor(name, paraplegic) {
//         this.name = name
//         this.paraplegic = paraplegic
//     }
// }
// const dog = new Animal('jorg', false);
// console.log(dog);


// // ==================== sc2 ====================
// class Human {
//     constructor(name, age, isFriendly) {
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//     }
// }
// const h = new Human('Doron', 25, false)
// console.log(`${h.name}, who is ${h.age} years old, is ${h.isFriendly ? 'friendly' : 'not friendly'}`)


// // ==================== sc3 ====================
// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children = []
//     }

//     giveBirth(name) {
//         return this.children.push(name)
//     }
// }
// const cat = new Animal("Puss", 4)
// cat.giveBirth("Dolly")
// console.log(cat.children)


// // ==================== sc4 ====================
// class Vehicle {
//     constructor (x, y, speed, fuel) {
//         this.x= x
//         this.y =y
//         Vehicle.carsSold ++
//         this._speed = speed
//         this._fuel = fuel
//     }

//     set fuel(amount) {
//         if (amount > 150) { return console.log("Too much") }
//         if (amount < 0) { return console.log("Not reasonable") }
//         this._fuel = amount
//     }
//     get fuel () {
//         return this._fuel
//     }

//     set speed (speed) {
//         if (speed < 0) {
//             return console.log("Speed must be positive")
//         }
//         this._speed = speed
//     }
//     get speed(){
//         return this._speed
//     }

//     static calculateMoney () {
//         // ==================== sc5 ====================
//         console.log(`made ${Vehicle.carsSold*30000} dollars`);
//     }

//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
// }

// Vehicle.getInfo()
// Vehicle.calculateMoney()
// Vehicle.carsSold = 0

// const c1 = new Vehicle ('ford', 'mustang', -2)
// const c2= new Vehicle ('ford', 'focus', 100)
// const c3 = new Vehicle ('ford', 'fiesta', 100, 155)
// const c4 = new Vehicle () 
// c4.x= 'seat'
// c4.y = 'ibiza'
// c4.speeed = '120mph'


// //==================== sc6 ====================

// class Zoo {
//     constructor() {
//         this.animals = []
//     }

//     addAnimal(animal) {
//         this.animals.push(animal)
//         console.log("Added " + animal.name + " to the zoo")
//     }

//     showAnimals() {
//         this.animals.forEach(a => console.log(a))

//     }
// }

// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }

// const cat = new Animal("Puss", 4)
// const zoo = new Zoo()

// zoo.addAnimal(cat) // prints "Added Puss to the zoo"
// zoo.showAnimals() // prints "Puss"












