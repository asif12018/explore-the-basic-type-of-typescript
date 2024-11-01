{

// Type alias

type Student = {
    name:string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
}

const student1 : Student = {
    name:'Asif',
    age:22,
    gender:'Male',
    contactNo:'0123456789',
    address:'Dhaka 1362'
}


const student2 : Student = {
    name:'Alu',
    age:15,
    gender:'Male',
    contactNo:'0123456789',
    address:'Dhaka 1362'
}

type UserName = string;

const userName: UserName = 'Sheikh'

type Add = (num1: number, num2: number) => number

const add: Add = (num1, num2)  =>{
    return num1 + num2
}

























}