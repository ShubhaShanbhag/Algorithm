//largest word in  the string

// declare a function with  str as params
//use split to seperate string
//assign 0 to a  variable 
//use for loop
// display function
function findLongestWord(str){
    let strSplit = str.split(' ');
    let longestWord = 0;
    for ( let i=0 ; i< strSplit.length ; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
        }
    }
    return longestWord ;
}
const word = findLongestWord("The sun is shining in the sky");
console.log(word);

