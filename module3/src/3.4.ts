{
//=====================================

//instance of guard

class Animal {
    name:string;
    species:string;

    constructor(name:string, species:string){
        this.name = name;
        this.species = species
    }

    makeSound(){
        console.log('im making sound')
    }
}

class Dog extends Animal {
    constructor(name:string,species:string){
        super(name,species);
    }
    makeBark(){
        console.log('im  barking')
    }
}

class Cat extends Animal {
    constructor(name:string, species:string){
        super(name, species);
    }
    makeMeow(){
        console.log('im meowing')
    }
}

const dog = new Dog('Dog bhai','dog');
const cat = new Cat('Catizen', 'cat');

//smart way to handle the instance using function

const isDog = (animal: Animal) : animal is Dog =>{
    return animal instanceof Dog
}

const isCat = (animal: Animal) : animal is Cat =>{
    return animal instanceof Cat
}

const getAnimal = (animal: Animal) =>{
    if(isDog(animal)){
    animal.makeBark()
    }
    else if(isCat(animal)){
        animal.makeMeow();
    }
}

getAnimal(dog)















//==========================================
}