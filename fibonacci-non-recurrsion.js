const fibArray = [0,1];
for( n=2; n<=10; n++){
    fibArray.push(fibArray[n-2] + fibArray[n-1]);    
}
console.log("fibArray:", fibArray);    