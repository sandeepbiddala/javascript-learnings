const fibArray = [0,1];
for( n=2; n<=5; n++){
    fibArray.push(fibArray[n-2] + fibArray[n-1]);    
}
const fibObj = {};
for(i=0;i<=5; i++){
    fibObj[i+1] = fibArray[i];
}
console.log("fibArray:", fibArray); 
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log('Sum of fibonacci:', fibArray.reduce(reducer));  
console.log('Fib number position:', fibObj[5]); 