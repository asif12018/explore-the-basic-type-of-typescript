{
//=============================================

//utility types
//Pick type

type Person = {
    name:string;
    age: number;
    email?:string;
    contactNo:string;
}

type NameAge = Pick<Person, "name" | "age">

// Omit type

type ContactInfo = Omit<Person,"name" | "age">


//Required Utility

type PersonRequired = Required<Person>

// Partial

type PersonPartial = Partial<Person>


//ReadOnly
type PersonReadOnly = Readonly<Person>


const person1 : Person = {
    name:"Mr. Asif",
    age: 256,
    contactNo:"1235"
}

// Record type

// type MyObj = {
//     a:string;
//     b:string;
// }

type MyObj = Record<string,string>

const obj1 : MyObj = {
    a:"aa",
    b:"bb",
    c:"cc"
}

const EmptyObj : Record<string, string> = {};













//=============================================
}