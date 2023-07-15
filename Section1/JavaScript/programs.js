// //WAP to print all perfect squares in range of 50-350
// for(let i=50;i<=350;i++)
// {
//     if(i**0.5 === parseInt(i**0.5))
//     console.log(i);
// }
// console.log('------------------------');

// //WAP to convert Clesius to fahrenheit and vice-versa

// let f=97;
// console.log('The celsius eqivalent of '+ f + ' is ' + ((f-32)*(5/9)));

// let c= 37;
// console.log('The fahrenheit eqivalent of '+ c + ' is ' + (c*(9/5)+32));
// console.log(`The Fahrenheit eqivalent of ${c} degree celsius is ${(c*(9/5)+32)} degree fahrenheit`)
// console.log('------------------------');

// //WAP to check if number is palindrome
// let num1= 376673;
// let num2=num1;
// let rev=0;
// while(num1)
// {
//      let rem= num1%10;
//      rev= rev*10 +rem;
//      num1 = parseInt(num1/10);
// }
// console.log(rev===num2);
// console.log('-------------------------');

// //WAP to print sum of all digits of a number
// let n= 1246793;
// let sum=0;
// while(n)
// {
//      let rem= n%10;
//     sum=sum+rem;
//     n=parseInt(n/10);
// }
// console.log(sum);
// console.log('---------------------------');

// //WAP to print fibonacci Series

// let l=15;
// let F=0;
// let S =1;
// console.log(F);
// console.log(S);

// for(let i=2;i<l;i++)
// {
//     let temp=F+S;
//     console.log(temp);
//     F=S;
//     S=temp;
// }

// let [a,b]=[0,1];
// console.log(`${a}\n${b}`);
// while(a+b<100)
// {
//     let sum=a+b;
//     console.log(sum);
//     [a,b]=[b,sum];
// }
// console.log('-------------------------');
// //Questions : 

// //1. Create an array of number and filter numbers which are not perfect squares.
// //2. Create an array of names and filter names with length greater than 5.
// //3. Create an array of full names and use map to keep only first name.(use split function)
// //4. Create a function to print all prime numbers in given range parameters.
// //question 1

// const arr=[1,2,,3,5,8,13,16,25,36,47,64];
// const temp_arr= arr.filter((p)=>{return p**0.5 != parseInt(p**0.5)});
// console.log(temp_arr);

// //Question2

// const names =['Vibhash', 'Deepak','Manas','Saksham','Pranjal','Ajay'];
// const names2= names.filter((n)=> {return n.length>5});
// console.log(names2);

// //Question3
// const fullName= ['Vibhash Dwivedi','Deepak Yadav','Manas Mishra','Saksham Mishra','Pranjal Tiwari','Ajay Yadav'];
// const firstName = fullName.map((f)=>{return f.split(" ")[0]});
// console.log(firstName);

// //Question 4
// const isPrime = (a,b) =>
// {
//     for( let i= a;i<=b;i++)
   
//     {
//         let flag=0;
//         for(let j=2; j*j<=i;j++)
//         {
//             if (i%j==0){
//                 flag=1;
//             break;
//             }
//         }
//         if(flag==0)
//         console.log(i);

//     }
// }
// isPrime(2,25);

// Questions: 
// 1. Find the sum of all laptop prices.
// 2. Add 10% discount to all laptop price. (use map)
// 3. Filter all the laptop having price more than 40000 and 60000 (use filter)


const laptop = [
    {brand:'HP', model:'Pavilion', price:69999, colors:["black","silver"]},
    {brand:'Lenovo', model:'thinkpad', price:56000, colors:['black']},
    {brand:'HP', model:'Elitebook', price:68000, colors:['blue']},
    {brand:'Asus', model:'Ultrabook', price:89999, colors:["Silver", "black","white"]},
];
//Question1
let sum=0;
for(let obj of laptop){
    sum+=obj.price;
}
console.log(sum)
console.log('-------------------------')


//Question2
const laptopD = laptop.map((n)=> { 
    n.price = n.price-n.price*0.1;
    return n;
});
console.log(laptopD)
console.log('-------------------------')


//Question3
const res= laptop.filter((n)=> { return n.price>40000 && n.price<60000});
console.log(res);
console.log('-------------------------')

console.log(laptop)
