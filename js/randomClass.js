
// "Reccept för en person"
class Person {

	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	sayHi(){
		return "Hi!. My name is " + this.name + " and I'm " + 
		  this.age + " years old.";
	}


	sayGoodbye(){
		return "Goodbye! My name is " + this.name + " and I'm " + 
		  this.age + " years old.";
	}

	sayHiAndGoodbye(){
		return this.sayHi() + " " + this.sayGoodbye();
	}

	allowedToDrink(){
		return this.age >= 18;
	}

	get allowedDrink(){
		return this.age >= 18;
	}
};



// Skapa person från receptet

var enPerson = new Person("Kalle",17);
var enAnnanPerson = new Person("Anna",24);

console.log(enPerson);
console.log(enAnnanPerson);

console.log( enPerson.allowedDrink);
enPerson.age++;
console.log( enPerson.allowedDrink);
