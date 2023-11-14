// create a function called fibonacci that recives a number
// create variable prev ,current and result number
//use for loop to get sum
//update variables
//print it


const fibonacci = (n) => {
    if (n <= 0){
        return "Please enter valid input"
    }else if ( n===1  || n===2){
        return 1
    } else {
        let currentIndex = 1 ;
        let prevIndex = 1 ;
        for (i=3 ; i<= n ; i++){
            let sum = currentIndex + prevIndex ;

            currentIndex = prevIndex ;
            prevIndex = sum ;
        }
        return prevIndex ;
    }
};

let n = 9;
console.log(fibonacci(n));

