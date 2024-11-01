{



// spread operator
//rest operator
// destructuring


//learn spread operator
const bros1 : string[] = ['Potol', 'Alu', 'Kumra', 'Gajor'];


const bros2 : string[] = ['DhunDul', 'FulKopi', 'Patakopi', 'Mula'];

bros2.push(...bros1);


const mentors1 : {typescript:string; redux:string; dbms:string;}  = {
    typescript:'Mezba',
    redux:'Mir',
    dbms:'Mizan'
}

const mentors2 : {
   prisma:string;
   next:string;
   cloud:string
} = {
    prisma:'Firoz',
    next:'Tanmoy',
    cloud:'MD. Nahid'
}

const mentorsList = {
    ...mentors1,
    ...mentors2
}


//learn rest operator
const greetFriends = (...friends : string[])  => {
    friends.forEach((friend : string) => console.log(`hi ${friend}`))
};

greetFriends('Abul', 'kabul', 'babul')






































}