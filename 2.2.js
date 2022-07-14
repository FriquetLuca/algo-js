let min = prompt('min:');
let max = prompt('max:');
let current = prompt('current:');
if(current >= min && current <= max)
{
    console.log(current);
}
// Bonus
if(min > max)
{
    console.error('Min is greater than max.');
}