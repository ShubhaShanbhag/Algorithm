//  Largest number in Arrays

//  write a function 
//  declare array with 0 as values  with length 4
//  use forloop  for array
//  use forloop for subarrays


function largestOfFour(arr){

    let largestNumber = [0, 0 , 0 , 0] ;
    
     for (let i = 0 ;  i < arr.length;   i++){
        for ( let j = 0;  j < arr[i].length; j++){
        if(arr[i][j] > largestNumber[i]){
            largestNumber[i] = arr[i][j]
        }
     }
}
return largestNumber;
}
arr = [ [ 3 ,9 ,0 ,12], [ 24 ,61, 9 ,2], [ 16 ,3 , 72 ,89], [ 95 ,34, 23,11]];
 console.log(largestOfFour(arr));
