let a = [1, 2, 3, 4, 5];
let b = [100, 101, 102];

let r1 = 0, r2 = 0;

for(let i of a)
{
    r1 += i;
}
for(let i of b)
{
    r2 += i;
}
console.log(`a: ${r1}\nb: ${r2}`);