// Sum All Numbers in Range

//write a function with name and pass the arry.
// use sort for sorting
//use forloop
// return sum
//display it

function sumAll(arr){
    if(arr[0]> arr[1])
    arr.sort ((a,b) => a-b)

    let sum = 0;
    for ( let i = arr[0] ; i <= arr[1]; i++)
    sum = sum +i ;

    return sum 
}

console.log(sumAll([5 , 10]));