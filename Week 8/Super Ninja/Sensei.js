class Ninja {
	constructor(name, health, speed = 3, strength = 3) {
		this.name = name;
		this.health = health;
		this.speed = speed;
		this.strength = strength;
	}

	sayName() {
		console.log(this.name);
		return this;
	}

	showStats() {
		console.log(
			`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`
		);
		return this;
	}

	drinkSake() {
		this.health += 10;
		return this;
	}
}

class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Wise quote");
        return this;
    }
}

const sensei = new Sensei("Test");
sensei.speakWisdom();