function fibonacci (n){
    let fibonacciNumber;
    if(n===0){
        fibonacciNumber = 0;
    } else if(n<2){
        fibonacciNumber = 1;
    } else {
        fibonacciNumber = fibonacci(n-2) + fibonacci(n-1);
    }
    return fibonacciNumber;
}
let addfib =0;
const fibArray = {};
for( i=0;i<=5;i++){
    const fibnumber = fibonacci(i);
    addfib = addfib + fibnumber;
    fibArray[i+1] = fibnumber;
    console.log(fibnumber);
}
console.log('Sum of fibonacci:', addfib);
console.log('Fib number position:', fibArray[4]);