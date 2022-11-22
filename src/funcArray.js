/* Encuentra el máximo */

export function maxOfTwoNumbers(a,b){
    return Math.max(a,b);    
}
export function findLongestWord(words){
    let longestWord = "";
    words.map(function(word){
        if (word.length>longestWord.length){
            longestWord = word;
            }})
        if (words.length==0){
            return undefined
        }
        return longestWord;
    }
    
export function sumArray(){}
export function averageNumbers(){}
export function averageWordLength(){}
export function uniquifyArray(){}
export function doesWordExist(){}
export function howManyTimes(){}
export function greatestProduct(){}





