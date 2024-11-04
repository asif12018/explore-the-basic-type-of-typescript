{

    //------------------------------------------


    //conditional type

    type a1 = null;

    type b2 = undefined;

    type x = a1 extends null ? true : false; // conditional type

    type y = a1 extends null ? true : b2 extends undefined ? undefined : any


    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }


    // car ase kina / bike ase kina / ship ase kina

    type CheckVehicle <T> = T extends keyof Sheikh ? true : false;

    type hasCar = CheckVehicle<'car'>

























    //----------------------------------------------

}