

//=========problem 1===========================//

// const sumArray = (arr:number[]) : number  =>{
//     const result = arr.reduce((add : number,current : number) : number=> add + current,0)
//     return result
// }

// const result = sumArray([1, 2, 3, 4, 5]);
// console.log(result);


//============== problem 2 ========================//

// const removeDuplicates = (arr:number[]):number[] | void =>{ 
//     let primaryArray : number[] = []
//     for(let i:number = 0; i < arr.length;i++){
      
//         if(!primaryArray.find((e : number) : boolean => e === arr[i])){
//             primaryArray.push(arr[i])
//         }
        
//     }

//     return primaryArray

// }

// const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// console.log(result)



//================= problem 3=========================//


// const countWordOccurrences = (sentence:string, word: string) : number | void =>{

//     let primaryCount = 0;
//     const spitedSentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLocaleLowerCase().split(' ');
//     for(let i : number = 0; i < spitedSentence.length; i++){
//         if(spitedSentence[i] === word){
//             primaryCount = primaryCount + 1;
//         }
//     }



//     return primaryCount

// }

// const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// console.log(result)



//==================== problem 4====================//

// type Area = {
//     shape:'circle' | 'rectangle';
//     radius?:number;
//     width?:number;
//     height?:number;
// }
// const calculateShapeArea = (data:Area) : number | void =>{

//     if ( data.shape === 'circle') {
//         if (data.radius !== undefined) {
//             const area = 3.1416 * data.radius * data.radius;
//             return area;
//         }
//         console.error('Radius is required for a circle.');
//         return; 
//     }

//     if( data.shape === 'rectangle'){
//         if (data.shape === 'rectangle') {
//             if (data.height !== undefined && data.width !== undefined) {
//                 const area = data.height * data.width;
//                 return area;
//             }
//             console.error('height and width is required for a circle.');
//             return; 
//         }
//     }

// }

// const circleArea  = calculateShapeArea({ shape: "circle", radius: 5 });

// console.log(circleArea)

// const rectangleArea = calculateShapeArea({
//     shape: "rectangle",
//     width: 4,
//     height: 6,
//   });

//   console.log(rectangleArea)

//====================== problem 5==================//

// type Property = {
//     name:string;
//     age:number;
// }

// const getProperty = <Y extends keyof Property> (obj:Property, Key:Y) =>{
//     return obj[Key]
// }

// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));


//=============== problem 6 ======================//

// interface Profile {
//     name:string;
//     age:number;
//     email:string;
// }

// const updateProfile = (profile: Profile, updates: Partial<Profile>) : Profile | void =>{
//      return {...profile, ...updates};
// }

// const myProfile: Profile = {name:'Asif', age:25, email:'asif.request@gmail.com'};

// const updatedProfile = updateProfile(myProfile,{name:'Ashik'});

// console.log(updatedProfile);

//=============== problem 7 ===================//

// class Car {
//     make:string;
//     model:string;
//     year:number;

//     constructor(make:string, model:string, year:number){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     getCarAge(){
//         const age = 2024 - this.year;
//         console.log(`${age} (assuming current year is 2024)`)
//     }
// }

// const car = new Car("Honda", "Civic", 2018);
// car.getCarAge();

//=============== problem 8 ===================//

// function validateKeys<T extends object>(obj:T, keys:(keyof T)[]) :boolean | void {
//   const result = keys.every(key => key in obj);
//   return result
// }

// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));




