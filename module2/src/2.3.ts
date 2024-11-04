{


// generic type

  type  Roll = [number] ;

  type GenericArray<param> = Array<param>;
  
  const rollNumber1 : Roll = [3, 6, 8];

  const rollNumber2 : Array <number> = [5, 10, 11];


  const mentors1 : string[] = ['mr. x', 'mr. y', 'mr. z'];
  const mentors2 : GenericArray<string> = ['mr. x', 'mr. y', 'mr. z'];

  const rollNumber3 : GenericArray<number> = [12, 13, 14, 15]

  const user : GenericArray<{name:string; age:number}> = [
    {
        name: 'Asif',
        age:22,
    },
    {
        name:'Sheikh',
        age:23
    }
  ]


  const boolArray : boolean[] = [true, false, true, false];


  //generic tuple
  type GenericTuple<X, Y> = [X, Y]

  const manus : GenericTuple<string, string> = ['mr. x', 'mrs y']

  const UserWithNameAndId : GenericTuple<string, number> = ['Asif', 123];

  const userWithId : GenericTuple<number, {name:string; email: string}> = [1234, {name: 'Asif', email: 'asif.request@gmail.com'}];

  interface User  {
    name: string;
    age: number;
  }
























}