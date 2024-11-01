{

// union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
// type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper';

// type Developer = FrontendDeveloper | FullStackDeveloper;


// const newDeveloper : FrontendDeveloper = 'juniorDeveloper';

type User = {
    name: string;
    email: string;
    gender: 'male' | 'female';
    bloodGroup: 'O+' | 'A+' | 'AB+';
}

const user1: User = {
    name:'Asif',
    email:'asif.request@gmail.com',
    bloodGroup:'O+'
}


//Intersection type
type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer';
}
type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer';
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

const fullstackdeveloper : FullStackDeveloper = {
    skills: ['html', 'css', 'express'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}




















}