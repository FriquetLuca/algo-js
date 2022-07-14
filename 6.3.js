class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length)
    {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle)
    {
        // This rectangle
        let left = this.topLeftXPos;
        let right = this.topLeftXPos + this.width;
        let up = this.topLeftYPos;
        let down = this.topLeftYPos - this.length;
        // The other rectangle
        let leftR = otherRectangle.topLeftXPos;
        let rightR = otherRectangle.topLeftXPos + otherRectangle.width;
        let upR = otherRectangle.topLeftYPos;
        let downR = otherRectangle.topLeftYPos - otherRectangle.length;
        // Is horizontal colliding?
        if((leftR >= left && leftR <= right) || (rightR >= left && rightR <= right))
        {
            // Is vertical colliding?
            if((upR >= down && upR <= up) || (downR >= down && downR <= up))
            {
                return true;
            }
        }
        return false;
    }
}
function rndPos()
{
    return Math.random() * 101 - 50;
}
function rndSize()
{
    return Math.random() * 11 - 5;
}
let numberOfRectangle = 1000;
let rects = [];
// Create all rectangles O(n)
for(let i = 0; i < numberOfRectangle; i++)
{
    rects.push(new Rectangle(rndPos(), rndPos(), rndSize(), rndSize()));
}
// Test all rectangles between each other to test for a collision O(n²) [AKA: n(n-1)/2 opérations]
let x = 0;
for(let i = numberOfRectangle - 1; i > 0; i--)
{
    for(let j = i - 1; j >= 0; j--)
    {
        if(rects[i].collides(rects[j]))
        {
            console.log(`Rectangle ${i} collided with rectangle ${j}`);
        }
    }
}
