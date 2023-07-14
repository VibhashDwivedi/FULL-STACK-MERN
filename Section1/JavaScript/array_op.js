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
console.log(emparray);
console.log('----------------------------------');

//map function
const result = nums.map( (n)=>{ return n**2});
console.log(result);


const prices=[1329, 38267, 4002, 402, 5793, 352];
console.log(prices.map( (n)=>{ return n*0.05+n}));

const prices2 =['$2423.23', '$583.39', '$63.99','$23.99','$12.99','$900.9'];
const res = prices2.map((n) => { return parseInt(n.slice(1))});
console.log(res);
console.log('-----------------------------------------');

//using filter
const filtered_prices = prices.filter((p)=> {return p>=500 &&p<=5000});
console.log(filtered_prices);

const laptop = ['Dell Vostro', 'Acer Predator', 'Asus Vivobook','HP Pavilion','Lenovo Thinkpad'];
keyword='Dell';
const searchData = laptop.filter((n)=>{ return  n.toLowerCase().includes(keyword.toLowerCase())}); 
console.log(searchData);

