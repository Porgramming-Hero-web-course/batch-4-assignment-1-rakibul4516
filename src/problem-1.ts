{
    // Problem-1 

    const sumArray  = (numbers: number[]): number => {
        let sum: number = 0;
        for (let num of numbers) {
            sum += num;
        }
        return sum;
    };
    
    const number = sumArray([1, 2, 3, 4, 5]);
    console.log(number);



    //
}