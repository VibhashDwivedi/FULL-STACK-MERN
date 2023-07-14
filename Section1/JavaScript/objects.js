const user={
    name: 'Raju',
    email: 'raju@mail.com',
    password:'34567'
};
console.log(user.email);
console.log(typeof user);
console.log(user['password']);

user.address='Lucknow';
console.log(user);

user.password='abrakadabra';
console.log(user);

for(let k of Object.keys(user))
{
    console.log(k);
}
for(let k of Object.values(user))
{
    console.log(k);
}
for(let k of Object.entries(user))
{
    console.log(k);
}

const laptop = [
    {brand:'HP', model:'Pavilion', price:69999, colors:["black","silver"]},
    {brand:'Lenovo', model:'thinkpad', price:56000, colors:['black']},
    {brand:'HP', model:'Elitebook', price:68000, colors:['blue']},
    {brand:'Asus', model:'Ultrabook', price:89999, colors:["Silver", "black","white"]},
];
console.log(laptop[3].price);
laptop[3].colors[0]='grey';
console.log(laptop[3]);

for(let k of laptop)
{
    console.log(k.brand);
}

const temp = laptop.filter((k)=> {return k.price<70000});
console.log(temp);

const temp2 = laptop.filter((k)=> {return k.colors.includes('black')});
console.log(temp2);










