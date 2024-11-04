

{
    // interface - generic

    interface Developer <T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T

    }

    const poorDeveloper : Developer<{brand:string; model:string; display:string}> = {
        name:'Asif',
        computer:{
            brand:'AMD',
            model:'X 55',
            releaseYear:2013
        },
        smartWatch: {
            brand:'zedblade',
            model:'2013',
            display:'OLED'
        }
    }


    const RichDeveloper : Developer<{brand:string; model:string; heartTrack:boolean; sleepTrack: boolean}> = {
        name:'Asif',
        computer:{
            brand:'Apple',
            model:'mac book air',
            releaseYear:2013
        },
        smartWatch: {
            brand:'apple watch',
            model:'2013',
            heartTrack:true,
            sleepTrack:true
        }
    }























    //
}