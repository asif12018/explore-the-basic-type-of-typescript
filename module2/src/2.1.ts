{

    // type assertion
    let anything : any;
    
    anything = 'Next Level Web development';
    (anything as string)


    const kgToGm = (value:string | number) : string | number | undefined =>{
      if(typeof value === 'string'){
         const convertedValue = parseFloat(value) * 1000
         return `The converted value is ${convertedValue}`
      }
      if(typeof value === 'number'){
        return value * 1000;
      }
    }


    const result1 = kgToGm(1) as number
    const result2 = kgToGm('1') as string
    console.log(result1);
    console.log(result2)























}