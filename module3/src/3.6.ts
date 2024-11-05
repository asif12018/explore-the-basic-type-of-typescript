{
    //=======================================
    
    // getter and setter
    
    class BankAccount {
        readonly id:number;
        name:string;
        protected _balance:number;
    
        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
    
        // addDeposit(amount:number){
        //     this._balance = this._balance + amount;
        // }
    
        // getBalance(){
        //     return this._balance;
        // }
        //using getter
        get Balance(){
            return this._balance;
        }

        //using setter
        set deposit(amount: number){
            this._balance = this._balance + amount;
            console.log(this._balance);
        }
    }
    
    
    
    
     const goribManusherAccount = new BankAccount(1234,'MD. Asif', 20);
    
    
    // goribManusherAccount.addDeposit(30);
    // const myBalance = goribManusherAccount.getBalance();
    // console.log(myBalance)

    // const myBalance = goribManusherAccount.Balance;
    // console.log(myBalance)


    goribManusherAccount.deposit = 50;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //======================================
    }