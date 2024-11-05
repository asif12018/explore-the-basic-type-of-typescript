{
//=====================================

// oop - inheritence

  class Parent {
     
    name: string;
    age: number;
    address: string;

    constructor( name: string,  age:number,  address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfHours: number){
        console.log(`${this.name} sleep total ${numberOfHours} hours`)
    }

  }

  class Student extends Parent {
    // name: string;
    // age: number;
    // address: string;

    constructor( name: string,  age:number,  address: string){
        // this.name = name;
        // this.age = age;
        // this.address = address;
        super(name, age, address)
    }

    // getSleep(numberOfHours: number){
    //     console.log(`${this.name} sleep total ${numberOfHours} hours`)
    // }
  }

  
  const student1 = new Student('Asif', 22, 'dhk');
  console.log(student1);
  student1.getSleep(5)

   class Teacher extends Parent {
      
     designation: string;
    constructor(name:string, age:number, address:string, designation:string){
        super(name, age, address)
        this.designation = designation;
        
    }

    // getSleep(numberOfHours: number){
    //     console.log(`${this.name} sleep total ${numberOfHours} hours`)
    // }

   }

  

//   const teacher1 = new Teacher('Asif', 22, 'dhk', 'senior teacher');

//   teacher1.takeClass(5)






//===================================
}