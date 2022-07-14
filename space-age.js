function spaceAge(seconds, planet)
{
    const earthDay = 365.25 * 24 * 60 * 60;
    seconds /= earthDay;
    let result = 0;
    planet = `${planet.charAt(0).toUpperCase()}${planet.slice(1)}`;
    switch(planet)
    {
        case 'Mercury':
            result = seconds * 0.2408467;
        case 'Venus':
            result = seconds * 0.61519726;
        case 'Earth':
            result = seconds;
        case 'Mars':
            result = seconds * 1.8808158;
        case 'Jupiter':
            result = seconds * 11.862615;
        default:
            result = seconds;
    }
    return Math.round(result * 100) / 100;
}
let seconds = prompt('Your age in seconds:');
let planet = prompt('The planet from which you want to know your age:');
console.log(spaceAge(seconds, planet));