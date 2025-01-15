

let letterCount= (word,letter)=>{
    word=word.toLowerCase();
    letter=letter.toLowerCase();

    totalCount=word.split("")
                    .reduce((acc,element)=>{
                        if(element===letter)
                        {
                            acc+=1;
                        }
                        return acc;
                    },0);
    return totalCount;
};

console.log(letterCount("Mississippi",'m'));