{
    //Problem-3

    const countWordOccurrences = (sentence: string, keyword: string): number => {
        let count: number = 0;
        //Split the sentence
        let wordsArray: string[] = sentence.split(' ');

        for (let word of wordsArray) {
            if (word.toLowerCase() === keyword.toLowerCase()) {
                count++;
            }
        }

        return count;
    };

    //Input perameter of countWordOccurrences function
    const inputValue = countWordOccurrences('Hello typescript .I love typescript . Typescript can do anything', 'typescript')
    console.log(inputValue)


    //
}