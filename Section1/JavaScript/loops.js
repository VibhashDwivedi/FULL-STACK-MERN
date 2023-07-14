// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }

// console.log('----------');
// for(let i=10; i>0;i--)
// {
//     console.log(i);
// }
// console.log('------------');

// let a=7;
// prime=true;
// for(let i=2;i*i<a;i++)
// {
//     if(a%i ==0){
//       console.log("Not Prime");
//       prime=false;
//       break;
//     }
// }
// if(prime)
// console.log("Prime")
// console.log('------------');

// for(let i=100;i<=500;i++)
// {
//     if(i%7==0 && i%11==0)
//     console.log(i);
// }
// console.log('------------');

// let n =1;
// perfectSqr=false;
// for(let i=1; i*i<=n;i++)
// {
//     if(i*i == n)
//      {
//         perfectSqr=true;
      
//         break;
//      }
// }
// console.log(perfectSqr);
// console.log('------------');

// let m=24;

// let sqrt = m**0.5;

// if(sqrt === parseInt(sqrt))
// {
//     console.log('perfect Square')
// }
// else{
//     console.log('not perfect square');
// }
// console.log('------------');

// p=10;
// while(p>0)
// {
//     console.log(p);
//     p--;
// }
// console.log('------------');

// q=10;
// do{
//     console.log(q);
//     q--;

// }while(q>0);
// console.log('------------');

let num1= 376574;
let rev=0;
while(num1)
{
     let rem= num1%10;
     rev= rev*10 +rem;
     num1 = parseInt(num1/10);
}
console.log(rev);
console.log('------------');