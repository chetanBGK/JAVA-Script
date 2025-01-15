let a=10;
let b='10';
let str1='Hello';
let str2='hello';
// console.log(a===b);
// console.log(a==b);
console.log(str1===str2);


console.log(str1==str2);

let numbers=[11,12,13,14,15,16,17];
numbers.push(18);
console.log(numbers)
numbers.pop();
console.log(numbers);
numbers.unshift(10);
console.log(numbers);
numbers.shift();
console.log(numbers);

for (let num in numbers)
{
    console.log("Using for in",num);
}

numbers.forEach((element)=>{
    console.log("Using for each",element*element);
});




let numMap=numbers.map((element)=>{
    return element*element;
}).reduce((element)=>element+element);

console.log(numMap);

let numReduce=numbers.reduce((element)=>{
    return element+element;
})
console.log(numReduce);

let sorted=numbers.sort((a,b)=>b-a);
console.log(sorted);

let students=[{
    name:"chetan",
    roll:55
},
    {
        name:"Ram",
        roll:44
    },
    {
        name:"Abhi",
        roll:33
    },
    {
        name:"Suraj",
        roll:22
    },
    {
        name:"krishna",
        roll:11
    },]

console.log(students.sort((name1,name2)=>
    name1.name.localeCompare(name2.name)));

console.log(
    students.sort((r1,r2)=>r1.roll-r2.roll)
);

console.log(
    students.sort((r1, r2) => r1.roll - r2.roll)
);

let sentence1="when you need a non-mutating method to extract or copy elements";

let words=sentence1.split(" ");
console.log(words);
console.log(words.sort((a,b)=>b.length-a.length));