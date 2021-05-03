var readlineSync = require('readline-sync');
var number = readlineSync.question("Choose a number ");

function Fibonacci(n){
    a = 0
    plus = 0
    b = 1
    c = 0 
    if (n == 0){
        console.log(0);
    }
    else if (n == 1){
        console.log(1);
    }
    else {
        while (c < n-1){
            plus = a + b  
            a = plus
            b = plus + b  
            c +=2
            }
        if (number % 2 === 0){
            console.log(a);
        }
        else{
            console.log(b);
        }
    }
    }
Fibonacci(number)





















