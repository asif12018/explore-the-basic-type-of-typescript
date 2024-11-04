{
    //======================================


    //mapped types

    const arrOfNumbers: number[] = [1, 2, 4, 5];

    // const arrOfStrings : string[] = ['kola', 'apple', 'jam'];

    const arrOfStrings: string[] = arrOfNumbers.map((num) => num.toString());

    console.log(arrOfStrings)



    type AreaNumber = {
        height: number;
        width: number;
    };

    type Height = AreaNumber['height'] // look up type


    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    type AreaString <T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString<{height: string; width: number}> = {
        height: "100",
        width:50
    }






















}