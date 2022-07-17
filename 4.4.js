 /***
  * Return an array of n random elements contained in inputAr. n can't be greater or equal to the number of elements the array contains nor can it be 0.
  ***/
function pickLearner(inputAr, n)
{
    if(n > 0 && n < inputAr.length)
    {
        let i = 0, r = [];
        while(i < n)
        {
            r.push(inputAr[Math.floor(Math.random() * inputAr.length)]);
            i++;
        }
        return r;
    }
    throw new Error('n can\'t be greater or equal to the number of elements the array contains nor can it be 0.');
}

let learner = [
    "Baudson Guillaume",
    "Benaccetta Rinaldo",
    "Blaevoet Benoit",
    "Brigode Xavier",
    "Charles Xavier",
    "Corda Daniela",
    "Denis Anthony",
    "Devilers Vincent",
    "Elinckx Julien",
    "Elyahyioui Selim",
    "Friquet Luca",
    "Gillard Sophie",
    "Kirac Axel",
    "Maddouri Hazem",
    "Maurcot Dylan",
    "Moussiaux Titouan",
    "Moraes Kamilla",
    "Pécher Stéphanie",
    "Scourneau Julien",
    "Vanvolcksom Doriano",
    "Vervoot Eddy"
];

console.log(pickLearner(learner, 7));