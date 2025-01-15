let rawCode="sorting words based on length max to min";
let words= rawCode.split(" ");

let capitalizeWord=words
    .map((element)=>
     element[0].toUpperCase()+element.slice(1));
            // .sort((a, b) => b.length - a.length));

console.log(capitalizeWord);

capitalizeWord=capitalizeWord.join("");
console.log("#"+capitalizeWord);



