let notFoutryTwo = true;
while(notFoutryTwo)
{
    let r = prompt("What's your favorite number?");
    notFoutryTwo = Number(r) !== 42;
    if(notFoutryTwo)
    {
        console.log("Are you sure?");
    }
}