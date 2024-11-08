{
    //Problem-2

    function removeDuplicates(numbers: number[]): number[] {
        //Use spread operator
        return [...new Set(numbers)];
    }

    // Input perameter of function
    const array = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(array);



    //
}