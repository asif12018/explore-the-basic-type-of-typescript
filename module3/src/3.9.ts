{
//==========================================

// abstraction : 1. interface 2. abstract


//idea
interface Vehicle1 {
    // name:string;
    // model:number;
    startEngine(): void
    stopEngine(): void;
    move(): void;

}

// const vehicle1 : Vehicle1 = {
//     name:'Toyota',
//     model:2000
// }

//real implementation

class Car implements Vehicle1{
     startEngine(): void {
         console.log(`im starting the engine`)
     }
     stopEngine(): void {
         console.log('im stoping the card engine')
     }
     move(): void {
         console.log('im moving the car')
     }
     test(){
        console.log('im just testing')
     }
}

const toyotaCar = new Car();
toyotaCar.startEngine();


// abstract class
  abstract class Car2 {
    abstract startEngine(): void 
    stopEngine(): void {
        console.log('im stoping the card engine')
    }
    move(): void {
        console.log('im moving the car')
    }
    test(){
       console.log('im just testing')
    }
 }

  
 class ToyotaCar extends Car2{
    startEngine(): void {
        
    }
 }











//============================================
}