{

// interface

type User1 = {
    name:string;
    age:number;
}

interface User2 {
    name: string;
    age: number;
}

type UserWithRole1 = User1 & {role:string}
interface UserWithRole2 extends User1 {
    role:string
}
const user1: UserWithRole1 = {
    name:'Asif',
    age:22,
    role:'student'
}

const user2 : UserWithRole2 = {
    name:'Sheikh',
    age:23,
    role:'developer'
}

// js --> object, array -> object , function --> object

type Roll1 = number[];
interface Roll2 {
    [index: number] : number
}

const rollNumber1: Roll1 = [1, 2, 3]
const rollNumber2: Roll2 = [4, 5, 6]

type Add1 = (num1: number, num2:number) => number
interface Add2 {
    (num1: number, num2: number): number
}

const add1 : Add1 = (num1, num2) => num1 + num2;
const add2 : Add2 = (num1, num2) => num1 + num2;




















}