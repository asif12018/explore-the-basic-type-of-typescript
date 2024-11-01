
{
// ternary operator || optional chaining || nullish coalescing operator

    const age : number = 18;
    
    // if(age >= 18){
    //     console.log('adult')
    // }else{
    //     console.log('not adult')
    // }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({isAdult})


    //nullish coalescing operator
    //null / undefine ---> decision making


    const isAuthenticated = null;

    const result1 = isAuthenticated ?? 'Guest'
    
    const result2 = isAuthenticated ? isAuthenticated : 'guest'

    console.log({result1}, {result2})


    type User = {
        name: string;
        address: {
            city:string;
            road: string;
            presentAddress: string;
            permanentAddress: string;
        }
    }

    const user: User = {
        name: 'Asif',
        address: {
            city:'Dhk',
            road:'new road',
            presentAddress:'Dhk',
            permanentAddress:'Dhk'
        }
    }

    const permanentAddress = user.address.permanentAddress;

    console.log({permanentAddress})























}