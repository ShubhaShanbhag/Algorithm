//TItle case sentence

// write a function 
// split the string using split
//use for loop
// use charAt ,slice .join, touppercase and lowercase to get a result

const sent = "how can i help you";

const titleCase = () => {
    let arr = sent.split(' ');
    for(let i = 0; i < arr.length; i++) {
        const firstLetter = arr[i].charAt(0).toUpperCase();
        const otherLetters = arr[i].slice(1).toLowerCase();

        arr[i] = firstLetter + otherLetters;
    }

    return arr.join(' ');
}

console.log(titleCase(sent));

  