/***
 * This function return the surface area of a rectangle.
 ***/
function calcSurface(width, lenght)
{
    return width * lenght;
}
let l = prompt('Length:');
let w = prompt('Width:');
console.log(calcSurface(w, l));