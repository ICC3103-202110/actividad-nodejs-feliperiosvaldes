var readlineSync = require('readline-sync');
var x = readlineSync.question("Choose a number ");

function Fibonacci(n){
    a = 0
    plus = 0
    b = 1
    c = 0 
    if (n === 0){
        console.log(0);
    }
    else if (n == 1){
        console.log(1);
    }
    else {
        while (c < n-2){
            plus = a + b  
            a = plus
            console.log(a)
            b = plus + b  
            c ++
            console.log(b)
            }
        //console.log(a);
    }
    }
Fibonacci(x)





















