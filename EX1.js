
///////...reverse astring a faunction that a given string....////
function reverseString(str) {
    var nweword= ""
    for (var i =str.lenghth-1;i>=0;i--){

    }


    
    return nweword

    
    }


   console.log(reverseString("hello"));
   //.....count characters; create a function that count this number of characters in a string....//////
   function countcharacters(str){
    var count=0
    for (var i=0;i<str.lenghth;  i++){
        count++

    }
    return count

   }

    
    console.log(countCharacters("hello"));



    ///...... capialize words:implwmwnt afunction that capitalizes the first letter of each word in a sentamce
    function capwords(sentamce){
        var array=[]
        array=sentamce.split ("")
        for (var i =0 ; i<array.lenghth;i++){
            var word = array[1]
            word=word[0].toUpperCase()+word.substring(1).tolowerCase()




        }
        return array.join("")

        console.log(capwords("hello word"))
    
  



   




        
   


      
        



    }

//.............array function..........//
//..... find minimum and find maximum......//
function findMax(arr) {
    var max = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;

}
console.log(findMax([3,8,9,5,3,2]));


function findMin(arr) {
    var min = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }
    return min;
}
//.......sum of array ..............//
function calculateSum(arr) {
    var sum = 0; 
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum;
}
////.....filter array................./////
function filterArray(arr, condition) {
    let filteredArr = [];
    
    
    for (var i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
}

var numbers = [1, 2, 3, 4, 5, 6];
var isEven = (num) => num % 2 === 0;

var evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); 

//...... factorial...////
function factorial(num) {
    let result = 1;
    
    for (let i = 1; i <= num; i++) {
        result *= i; 
    }
    
    return result;
}////prime number check
function isPrime(num) {
    if (num <= 1) return false;  

    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) return false; 
    }

    return true; 
}
/////...fibonacci sequence....//////

function fibonacci(n) {
    let fibSequence = [0, 1]; 

    if (n <= 1) return [0]; 

    for (let i = 2; i < n; i++) {
      
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}





