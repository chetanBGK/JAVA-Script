let sentence1="when you need a non-mutating method to extract or copy elements";

let words=sentence1.split(" ");
// console.log(words);
console.log("sorting words based on length max to min");
console.log(words.sort((a,b)=>b.length-a.length));
console.log("Longest word is ",words[0]);
console.log("Shortest word is ",words[words.length-1]);
console.log("sorting words based on dictionary order");
console.log(words.sort());

console.log("using reduce method");

let longestWord=words.reduce((acc,element)=>
    acc.length>element.length?acc:element);

console.log("Longest word is ",longestWord);

