let arr = [1, 2, 3, 4, 5];
let arrCopy = [];
for(let i of arr)
{
    arrCopy.push(i);
}
console.log(arrCopy);
let arrCopy2 = [...arr];
console.log(arrCopy2);