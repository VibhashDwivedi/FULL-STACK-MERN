//WAP to print all perfect squares in range of 50-350
for(let i=50;i<=350;i++)
{
    if(i**0.5 === parseInt(i**0.5))
    console.log(i);
}
console.log('------------------------');

//WAP to convert Clesius to fahrenheit and vice-versa

let f=97;
console.log('The celsius eqivalent of '+ f + ' is ' + ((f-32)*(5/9)));

let c= 37;
console.log('The fahrenheit eqivalent of '+ c + ' is ' + (c*(9/5)+32));
console.log('------------------------');

//WAP to check if number is palindrome
let num1= 376673;
let num2=num1;
let rev=0;
while(num1)
{
     let rem= num1%10;
     rev= rev*10 +rem;
     num1 = parseInt(num1/10);
}
console.log(rev===num2);
console.log('-------------------------');

//WAP to print sum of all digits of a number
let n= 1246793;
let sum=0;
while(n)
{
     let rem= n%10;
    sum=sum+rem;
    n=parseInt(n/10);
}
console.log(sum);
console.log('---------------------------');

//WAP to print fibonacci Series

let l=15;
let F=0;
let S =1;
console.log(F);
console.log(S);

for(let i=2;i<l;i++)
{
    let temp=F+S;
    console.log(temp);
    F=S;
    S=temp;
}
console.log('-------------------------');


