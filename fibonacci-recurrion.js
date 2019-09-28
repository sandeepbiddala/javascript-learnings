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

for( i=0;i<=5;i++){
    console.log(fibonacci(i));
}