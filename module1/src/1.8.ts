{




// object destructuring

const user = {
    id:345,
    name:{
        firstName:'Asif',
        middleName:'',
        lastName:'Sheikh'
    },
    contactNo:'0123456789',
    address:'Bangladesh'
}


const {contactNo, name: {middleName: midName}} = user;

// array destructuring
const myFriends = ['Alu', 'Potol', 'Kola', 'Jambura'];

const [a, b, c] = myFriends;




























}