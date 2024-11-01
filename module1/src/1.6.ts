//Learning function
//Normal function


function add(num1 : number, num2 : number): number{
    return num1 + num2
}



//Arrow Function

const addArrow = (num1: number, num2: number ): number =>{
    return num1 + num2
}

//object --> function --. method

const poorUser = {
    name:'Asif',
    balance:0,
    addBalance(balance:number) : number {
        return this.balance + balance
    }
}


const arr : number[] = [1, 4, 10];

const newArray : number[] = arr.map((elem : number) : number => elem * elem)
