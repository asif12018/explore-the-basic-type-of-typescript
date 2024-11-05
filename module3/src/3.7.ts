{
//=================================

//static

class Counter {
    static count: number = 0;
    static increment(){
        return Counter.count = Counter.count + 1
    }

    static decrement(){
        return Counter.count = Counter.count - 1;
    }
}

// const instance1 = new Counter();
console.log(Counter.increment()) // 1 -> different memory

// const instance2 = new Counter();
console.log(Counter.decrement()) // 2 -> different memory




















//=================================
}