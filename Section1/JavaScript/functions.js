function addNums(a,b)
{
    var c=a+b;
    console.log(c);
}
addNums(2345, 7865);

// console.log(c);
const getPercentage= function(m1,m2,m3,m4,m5){
   
    let sum=m1+m2+m3+m4+m5;
    return (sum/500)*100;
}
console.log(`Percentage = ${getPercentage(56,78,87,71,63)}%`);

const getFact = (num)=>{
    let f=1;
    for(let i=1;i<=num;i++)
    {
        f*=i;
    }
    return f;
};
const result= getFact(5);
console.log(result);