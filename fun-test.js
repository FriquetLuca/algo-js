/***
 * Return an array of ordered combination without repetition of n objets (a string array) classified in k groups.
 */
function combinationArray(objects, k)
{
    let n = typeof objects === 'number' ? objects : objects.length; // Assign n as the length of all objets or the number passed through the function
    if(n < k) // n must be greater or equal to k...
    {
        throw new Error('The number of object must be greater or equal to k.');
    }
    let offset = n - k + 1; // The offset generated by the number of group
    let result = []; // Declare the result
    for(let i = 0; i < offset; i++) // Loop through all possible values on the first element
    {
        let generated = combinationArrayDepth(objects, // Pass our objects
            i + 1, // Go to the next index to get the start of the next element
            offset + 1, // Subgroup gain a start offset of 1
            k - 1, // Align k for depth check since array start at 0
            0, // No depth, it's the 1st subgroup
            typeof objects === 'number' ? `${i}` : `${objects[i]}` // Give the object at the specific position in the array as a string or the position itself
        );
        Array.prototype.push.apply(result, generated); // Combine result
    }
    return result; // Return the result
}
/***
 * Generate an array of the entire set of element made out of binomial coefficient by taking the depth stack into account.
 */
function combinationArrayDepth(objects, index, offset, k, depth = 0, content = "")
{
    if(depth >= k) // If our depth is grater or equal to k, then we have all we need
    {
        return [content]; // We return the new string we made on the way.
    }
    let result = []; // Declare a result
    for(let i = index; i < offset; i++) // Loop through the possible values between index and offset - 1
    {
        let generated = combinationArrayDepth(objects,
            i + 1, // Go to the next index to get the start of the next element
            offset + 1, // Subgroup gain a start offset of 1
            k, // Just passing k along, it's already align if nothing goes wrong
            depth + 1, // Next depth of the stack
            `${content},${typeof objects === 'number' ? ` ${i}` : ` ${objects[i]}`}` // Give the object at the specific position in the array as a string or the position itself
        ); // Go into nested combinations
        Array.prototype.push.apply(result, generated); // Combine result
    }
    return result; // Return the result
}


let resultCombination = combinationArray(6, 3);
for(let item of resultCombination)
{
    console.log(item);
}
console.log(`Total combination: ${resultCombination.length}`);

let arr = [
    'voiture', 'train', 'car', 'vélo', 'moto', 'scooter'
];
resultCombination = combinationArray(arr, 3);
for(let item of resultCombination)
{
    console.log(item);
}
console.log(`Total combination: ${resultCombination.length}`);




/***
 * Return an array of ordered combination without repetition of n objets (a string array) classified in k groups.
 */
 function combinationArrayNRNO(objects, k)
 {
     let n = typeof objects === 'number' ? objects : objects.length; // Assign n as the length of all objets or the number passed through the function
     if(n < k) // n must be greater or equal to k...
     {
         throw new Error('The number of object must be greater or equal to k.');
     }
     let offset = n - k + 1; // The offset generated by the number of group
     let result = []; // Declare the result
     for(let i = 0; i < offset; i++) // Loop through all possible values on the first element
     {
        let content = [];
        content.push(objects[i]);
         let generated = combinationArrayDepthNRNO(objects, // Pass our objects
            i + 1, // Go to the next index to get the start of the next element
            offset + 1, // Subgroup gain a start offset of 1
            k - 1, // Align k for depth check since array start at 0
            0, // No depth, it's the 1st subgroup
            content // Give the object at the specific position in the array as a string or the position itself
         );
         Array.prototype.push.apply(result, generated); // Combine result
     }
     return result; // Return the result
 }
 /***
  * Generate an array of the entire set of element made out of binomial coefficient by taking the depth stack into account.
  */
 function combinationArrayDepthNRNO(objects, index, offset, k, depth = 0, content = [])
 {
     if(depth >= k) // If our depth is grater or equal to k, then we have all we need
     {
        return [content]; // We return the new string we made on the way.
     }
     let result = []; // Declare a result
     for(let i = index; i < offset; i++) // Loop through the possible values between index and offset - 1
     {
        let copyContent = [...content, objects[i]];
         let generated = combinationArrayDepthNRNO(objects,
            i + 1, // Go to the next index to get the start of the next element
            offset + 1, // Subgroup gain a start offset of 1
            k, // Just passing k along, it's already align if nothing goes wrong
            depth + 1, // Next depth of the stack
            copyContent // Give the object at the specific position in the array as a string or the position itself
         ); // Go into nested combinations
         Array.prototype.push.apply(result, generated); // Combine result
     }
     return result; // Return the result
 }

 let custom = [
    'DOTS',
    'EMF 5',
    'Fingerprints',
    'Freezing Temperature',
    'Ghost Orbs',
    'Ghost Writing',
    'Spirit Box'
];
let includes = [
    'EMF 5',
    'DOTS'
];
resultCombination = combinationArrayNRNO(custom, 2);
let i = 0;
for(let combination of resultCombination)
{
    console.log(combination);
    i++;
}
/*


[ "EMF 5", "Ghost Orbs" ] 1
Raiju

[ "Ghost Writing", "DOTS" ] 1
Thaye

[ "DOTS", "Freezing Temperature" ] 2
Yurei
Oni

[ "Ghost Orbs", "Spirit Box" ] 3
Mare
Yokai
Onryo
The Mimic

[ "Freezing Temperature", "Ghost Writing"  ] 3
Revenant
Shade
Demon

[ "EMF 5", "Fingerprints" ] 3
Jinn
Myling
Obake

[ "EMF 5", "Ghost Writing" ] 3
Spirit
Shade
Myling

[ "EMF 5", "Spirit Box" ] 3
Spirit
Wraith
The Twins

[ "Fingerprints", "Ghost Writing" ] 3
Poltergeist
Demon
Myling

[ "Fingerprints", "Spirit Box" ] 3
Phantom
Poltergeist
The Mimic

[ "Fingerprints", "DOTS" ] 3
Phantom
Banshee
Goryo

[ "Ghost Writing", "Ghost Orbs" ] 3
Mare
Revenant
Thaye

[ "EMF 5", "Freezing Temperature" ] 4
Jinn
Shade
Oni
The twins

[ "EMF 5", "DOTS" ] 4
Wraith
Oni
Goryo
Raiju

[ "Fingerprints", "Freezing Temperature" ] 4
Jinn
Demon
Hantu
The Mimic


[ "Freezing Temperature", "Spirit Box" ] 4
The Twins
Onryo
The Mimic
Moroi

[ "Spirit Box", "DOTS" ] 4
Wraith
Phantom
Yokai
Deogen

[ "DOTS", "Ghost Orbs" ] 5
Banshee
Yurei
Yokai
Raiju
Thaye

[ "Freezing Temperature", "Ghost Orbs" ] 5
Revenant
Yurei
Hantu
Onryo
The Mimic

[ "Ghost Writing", "Spirit Box" ] 5
Spirit
Poltergeist
Mare
Moroi
Deogen

[ "Fingerprints", "Ghost Orbs" ] 6
Banshee
Yurei
Yokai
Raiju
Thaye
The Mimic

*/
/*
for(let combination of resultCombination)
{
    let isIncluded = false;
    let nbrIncluded = 0;
    for(let item of includes)
    {
        if(combination.includes(item))
        {
            isIncluded |= true;
            nbrIncluded++;
        }
    }
    if(isIncluded && nbrIncluded >= 2)
    {
        console.log(combination);
        i++;
    }
}*/
console.log(`Total combination: ${i}`);