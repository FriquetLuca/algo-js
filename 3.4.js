let arr = [1, 2, 3, 4, 5];
let min = 999999999, max = -999999999;
for(let i of arr)
{
    min = Math.min(min, i);
    max = Math.max(max, i);
}
console.log(`min: ${min}\nmax: ${max}`);