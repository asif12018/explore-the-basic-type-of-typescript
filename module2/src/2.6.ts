{
//---------------------------------------

// constraints
const addCourseToStudent =<T extends {id: number; name: string; email:string}> (student: T) =>{
    const course = 'Next Level Web Development';
    return {
     ...student,
     course
    }
 }


 const student1 = addCourseToStudent<{id:number;  name:string; email:string; hasWatch:string}>({id:1,name:'Asif',email:'1@1.com', hasWatch:'Apple Watch'})

 const student2 = addCourseToStudent<{id: number; name:string; email:string; hasWatch:string}>({id:2, name:'sheikh',email:'1@2.com', hasWatch:'Apple Watch 2'})






//---------------------------------------
}