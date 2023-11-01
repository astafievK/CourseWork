const coolButtons = document.querySelectorAll('.cool');
const goodButtons = document.querySelectorAll('.good');
const satisfactoryButtons = document.querySelectorAll('.satisfactory');
const badButtons = document.querySelectorAll('.bad');

const buttonCool = document.getElementById('buttonCool');
const buttonGood = document.getElementById('buttonGood');
const buttonSatisfactory = document.getElementById('buttonSatisfactory');
const buttonBad = document.getElementById('buttonBad');


buttonBad.addEventListener('click', () => {
    buttonBad.classList.toggle('selected')
    badButtons.forEach(badButtons => {
        badButtons.classList.toggle('coloured');
    });
});

buttonCool.addEventListener('click', () => {
    buttonCool.classList.toggle('selected')
    coolButtons.forEach(coolButtons => {
        coolButtons.classList.toggle('coloured');
    });
});

buttonSatisfactory.addEventListener('click', () => {
    buttonSatisfactory.classList.toggle('selected')
    satisfactoryButtons.forEach(satisfactoryButtons => {
        satisfactoryButtons.classList.toggle('coloured');
    });
});

buttonGood.addEventListener('click', () => {
    buttonGood.classList.toggle('selected')
    goodButtons.forEach(goodButtons => {
        goodButtons.classList.toggle('coloured');
    });
});