 // 1. Addition
 // declare a  variable sum with value 0
 // use for loop
 // display sum 
 
 let sum = 0;
 for ( i = 200 ; i<=2700 ; i++){
    if(i % 3 == 0 && i % 5 == 0){
        continue;
    }
    else if( i % 3 == 0 || i % 5 == 0){
        sum = sum + i ;
    }
 }
    console.log(sum);


    // 2. Shift the values
    // declare variable with values
    // declare a empty array
    //use for loop to reverse the values
    
    let v =[ 3, 6, 0 , 11, 34, 63, 77]

    let rev = [];
    
    for( i = v.length-1 ; i>=0 ; i--){
        let newind = v[i]
        rev.push(newind)
    }

    // 3 . FizzBuzz
    // declare a variable with values
    // use for loop
    // use if condition
    //display variable x
 let x=[ 2,6,8,5,0,21,30,25]
 for(  i = 0; i<= x.length; i++){
    if( x[i] % 3  == 0  &&  x[i] % 5 == 0){ 
        x[i] = "fizzbuzz";
    }
    else if(x[i] % 5 == 0){
        x[i]= "buzz";
    } else if ( x[i] % 3 == 0){
        x[i] = "fizzz";
    } 
  }
    
   console.log(x);


// 4 .Fibonacci
// program to generate fibonacci series up to a certain number

// take input from the user
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= 1000000) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}


// 5 .Remove the Negative
// declare variable with values
// declare new empty array
// use for loop
// use if condition 

let arr =[ 3, 6, -4,1,-6,12, 56,-89 ,8,-9]
 let newarry =[];
for( i =0 ; i <= arr.length; i++){
    if ( arr[i] > 0 ){
       newarry.push(arr[i]) 
    }
    
}
 console.log(newarry);

 // 6 .Communist Censorship
 // declare variable with values as strings 
 // use for loop
 // use if condition

let statement = ['Man', 'I','Love','The','Matrix','Program']
for ( i = 0 ; i <= statement.length ; i++){
    if( statement[i]=== 'Program')
    statement[i] = '*******';
}
  console.log(statement);

 