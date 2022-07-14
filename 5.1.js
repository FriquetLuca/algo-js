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
console.log(JSON.stringify(askTvSerie()));