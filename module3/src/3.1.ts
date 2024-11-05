{

 //==========================================
 
 // oop - class

 class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;
    
    // parameter properties

    constructor(public name:string, public species:string, public sound:string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }
 }

 const dog = new Animal("German Shepard", "dog", "Ghew Ghew");

 const cat = new Animal("persian cat", "cat", "meow meow");
 cat.makeSound()
 dog.makeSound()



 //========================================
}