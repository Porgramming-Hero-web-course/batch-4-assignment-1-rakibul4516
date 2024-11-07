"use strict";
{
    //Problem-3
    const countWordOccurrences = (sentence, keyword) => {
        let count = 0;
        //Split the sentence
        let wordsArray = sentence.split(' ');
        for (let word of wordsArray) {
            if (word.toLowerCase() === keyword.toLowerCase()) {
                count++;
            }
        }
        return count;
    };
    //Input perameter of countWordOccurrences function
    const inputValue = countWordOccurrences('Hello typescript .I love typescript . Typescript can do anything', 'typescript');
    console.log(inputValue);
    //
}
