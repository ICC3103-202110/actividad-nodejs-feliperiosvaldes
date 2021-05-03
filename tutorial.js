var readlineSync = require('readline-sync');
var number = readlineSync.question("Choose a number ");

function Fibonacci(n){
    a = 0
    plus = 0
    b = 1
    c = 0 
    if (n === 1 || n == 0){
        console.log(0);
    }
    else if (n == 2){
        console.log(1);
    }
    else {
        while (c < n-2){
            plus = a + b  
            a = plus
            //console.log(a);
            b = plus + b  
            //console.log(b);
            c +=2
            }
        if (number % 2 === 0){
            console.log(b);
        }
        else{
            console.log(a);
        }
    }
    }
Fibonacci(number)





















