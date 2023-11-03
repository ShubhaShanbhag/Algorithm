// Third largest number in a Array

// array must have atleast 3 numbers
// write a function
// consider first 3 numbers as 0
// use for loop for each 3 numbers
// call function passing arguments

 let Arr = [ 45, 6 , 51, 61, 7, 11, 90 ]

  function thirdLargest(Arr){
     
    let n1 =0 ; n2 = 0 ; n3 = 0 ;
    for ( let i = 0 ; i < Arr.length ; i++){
        if( Arr[i] > n1 ){
            n3 = n2;
            n2 = n1 ;
            n1 = Arr[i];

        } else if 
          ( Arr[i] > n2 ){
            n3 = n2 ;
            n2 = Arr[i] ;

          }else if
          ( Arr[i]> n3){

            n3 = Arr[i] ;
            
          }

        }
        return [n1 ,n2 ,n3 ]
    }
    console.log(thirdLargest(Arr));
  
