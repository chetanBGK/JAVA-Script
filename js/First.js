let item=0;

function addItem()
{
    item+=1;
}

document
    .querySelector('#elements')
    .innerText=`Your bag has ${item} elements`;

function movetobag()
{
    if (item!==0)
    item-=1;
    else
        alert("Your bag is empty");
}