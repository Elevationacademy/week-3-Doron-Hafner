// Given a boolean weArePoor, create an instance of Animal that receives either a LuxuryFeeder or a CheapFeeder depending on the boolean's value.
// Test your code with both values to see DI in action ~
class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}


class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }
        
        return "scraps"
    }
}



class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder //dependency injection!
    }
    
    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }
    
    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
}
let LuxuryFeeder = new LuxuryFeeder()
let CheapFeeder = new CheapFeeder()
let a = new Animal ()
let weArePoor = false
let chooseFeeder 
if (weArePoor) {
    chooseFeeder = CheapFeeder
} else {
    chooseFeeder = LuxuryFeeder
}
