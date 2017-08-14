class Dog {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
	}

	bark() {
		console.log("wuf! wuf!");
	}

	speak(msg) {
		console.log(this.name + " says: " + msg);
	}
}

class StBernard extends Dog {
    constructor() {
        super("Beethoven");
    }
}
