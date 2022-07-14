/***
 * Return the distance between 2 points A and B, both of them being an array of 2 elements.
 ***/
function calcDistance(A, B)
{
    let X = [B[0] - A[0], B[1] - A[1]]; // Get the distance vector
    return Math.sqrt(X[0] * X[0] + X[1] * X[1]); // Get it's length
}
console.log(calcDistance([4, 1], [1, 1]));