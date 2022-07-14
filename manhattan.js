function manhattan(streetA, avenueA, streetB, avenueB)
{
    return Math.abs(streetB - streetA) + Math.abs(avenueB - avenueA);
}
// going from 1st street/1st avenue to 2nd street/2nd avenue
console.log(manhattan(1, 1, 2, 2)); // returns 2
console.log(manhattan(1, 1, 1, 1)); // return 0
console.log(manhattan(5, 4, 3, 2)); // returns 4