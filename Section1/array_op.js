const nums =[2,4,62,6,28];

for(let i=0;i<5;i++)
{
    console.log(nums[i]**2);
}
console.log('---------------------------');

for(let x of nums)
{
    console.log(x**2);
}
console.log('---------------------------');
const emparray=[];
for(let x of nums)
{
    console.log(emparray);
    emparray.push(x**2); 
}