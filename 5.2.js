function askTvSerie()
{
    let result = {
        name: prompt("What's your favourite TV serie?"),
        productionYear: prompt("What's it's production year?"),
        castMembers: []
    }
    let choose = true;
    while(choose)
    {
        let input = prompt("What's the cast members?");
        choose = input.length !== 0;
        if(choose)
        {
            result.castMembers.push(input);
        }
    }
    return result;
}
/***
 * Randomize the cast list order.
 ***/
function randomizeCast(tvSerie)
{
    let cast = tvSerie.castMembers;
    for(let i = 0; i < cast.length; i++)
    {
        let tmp1 = Math.floor(Math.random() * cast.length);
        let tmp2 = Math.floor(Math.random() * cast.length);
        let tmpCast = cast[tmp1];
        cast[tmp1] = cast[tmp2];
        cast[tmp2] = tmpCast;
    }
    return cast;
}

console.log(randomizeCast(askTvSerie()));