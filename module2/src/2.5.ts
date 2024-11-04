{
    //functions with generics

    const createArray = (param: string) : string[] =>{
        return [param]
    }

    const createArrayWithGeneric  = <T> (param: T) : T[] =>{
        return [param]
    }


    const res1 = createArray('bangladesh')
    const resGeneric = createArrayWithGeneric<boolean>(true);
    
    type User = {id:number; name:string}

    const resGenericObj = createArrayWithGeneric<User>({id:222, name:'Asif'})


    ///////====================================




    const createArrayWithTuple = <T ,Q>(param1:T, param2: Q) : [T, Q] =>{
        return [param1, param2]
    }

    const newRes1 = createArrayWithTuple<string, number>('Bangladesh',222)

    const newRes2 = createArrayWithTuple<string,{name:string}>('Bangladesh',{name:'Asia'})

    const addCourseToStudent =<T> (student: T) =>{
       const course = 'Next Level Web Development';
       return {
        ...student,
        course
       }
    }

    const student1 = addCourseToStudent<{name:string; email:string}>({name:'Asif',email:'1@1.com'})



    //
}