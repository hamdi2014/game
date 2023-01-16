const digitCount =  (numInBaseTen)=>{ //this function return number of digits.
    return Math.max(Math.floor(Math.log10(Math.abs(numInBaseTen))), 0) + 1;
}
const reverse=(num)=>{
    let reverseNum=0;
    let tmpNum=num;
    for(let i=digitCount(num)-1;i>=0;i--){
        reverseNum+=(tmpNum%10)*Math.pow(10,i);
        tmpNum=Math.floor(tmpNum/10);
    }
    return reverseNum
}
const symmetric=(num)=>{
    if(num===reverse(num)) return true;
    return false;
}
const largeSymmetricNumMultipleTwoThreeDigitsNum=()=>{
    let res=0;
    for(let i=999;i>=100;i--){
        for(let j=i;j>=100;j--){
            if(symmetric(i*j)){
                if((i*j)>res) res=i*j;
            }
        }
    }
    return res
}
const sumOfNumDivisibleOn5Or3LowerThan1000=()=>{
    let sum=0;
    for(let i=3;i<1000;i++){
        if(i%3===0 || i%5===0){
            sum+=i;
        }
    }
    return sum;
}
const startTime=performance.now();
console.log(largeSymmetricNumMultipleTwoThreeDigitsNum());
const endTime=performance.now();
console.log(`in test.js Function execution time is ${endTime-startTime}ms`);
// console.log(sumOfNumDivisibleOn5Or3LowerThan1000());