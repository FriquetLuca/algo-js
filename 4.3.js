/***
 * Return a random number between 1 and 10.
 ***/
function rand10()
{
    return Math.floor(Math.random() * 10) + 1;
}
/***
 * Return an array of n elements where each element is a random number between 1 and 10.
 ***/
function multiRand(n)
{
    let r = [];
    for(let i = 0; i < n; i++)
    {
        r.push(rand10());
    }
    return r;
}
let N = prompt('How many number to generate?');
console.log(multiRand(N));