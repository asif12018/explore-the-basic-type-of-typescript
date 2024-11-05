{
//=======================================

// access modifier

class BankAccount {
    readonly id:number;
    name:string;
    protected _balance:number;

    constructor(id:number, name:string, balance:number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    addDeposit(amount:number){
        this._balance = this._balance + amount;
    }

    getBalance(){
        return this._balance;
    }
}

class StudentAccount extends BankAccount{
     test(){
        this._balance
     }
}


 const goribManusherAccount = new BankAccount(1234,'MD. Asif', 20);


goribManusherAccount.addDeposit(30);
const myBalance = goribManusherAccount.getBalance();
console.log(myBalance)




















//======================================
}