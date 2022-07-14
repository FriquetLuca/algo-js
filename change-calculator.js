function computeChange(price, moneyHanded)
{
    if( typeof price !== 'number'
        || price < 0
        || typeof moneyHanded !== 'number'
        || moneyHanded < 0
        || moneyHanded < price
    )
    {
        return [];
    }
    // The float equivalent of the value
    const moneyChange = [
        500,
        200,
        100,
        50,
        20,
        10,
        5,
        2,
        1,
        0.5,
        0.2,
        0.1,
        0.05,
        0.02,
        0.01
    ];
    // Using BIGINT for precision issue
    const moneyChangeTEST = [
        50000n,
        20000n,
        10000n,
        5000n,
        2000n,
        1000n,
        500n,
        200n,
        100n,
        50n,
        20n,
        10n,
        5n,
        2n,
        1n
    ];
    // Convert the change into a big INT so we don't have to deal with precission issue
    let flooredChange = BigInt(moneyHanded * 100) - BigInt(price * 100);
    let result = [];
    for(let i = 0; i < moneyChange.length; i++) // Test all money changes
    {
        if(moneyChangeTEST[i] <= flooredChange) // It's less or equal to the amount?
        {
            let n = flooredChange / moneyChangeTEST[i]; // How many coins do we need?
            for(let j = 0; j < n; j++)
            {
                result.push(moneyChange[i]); // Put the number of items needed
            }
            flooredChange -= moneyChangeTEST[i] * n; // Substract the value already computed
        }
    }
    return result;
}

console.log(computeChange(12.3, 50)); // [20, 10, 5, 2, 0.5, 0.2]
console.log(computeChange(17.41, 20)); // [2, 0.5, 0.05, 0.02, 0.02]