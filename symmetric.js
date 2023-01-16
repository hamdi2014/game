const symmetric=(num)=>{
    if(num===Number(num.toString().split("").reverse().join(""))) return true;
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
const startTime=performance.now();
console.log(largeSymmetricNumMultipleTwoThreeDigitsNum());
const endTime=performance.now();
console.log(`in symmetric.js Function execution time is ${endTime-startTime}ms`);