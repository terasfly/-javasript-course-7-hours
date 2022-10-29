//Chalenge1: Your Age in Days

// let result = document.getElementById('flex-box__result');

// function ageInDays() {
//     let birthYear = prompt('What yeear were your born... Good friend?');
//     let ageInDays = (2018 - birthYear) * 365;
//     result.textContent = `You are ${ageInDays} old.`;

// }
// document.querySelector('.btn2').addEventListener('click', () => {
//     result.textContent = ' '
// })
// function reset() {
//     document.getElementById('ageInDays').remove();
// }
const answer = document.querySelector('.answer');
document.querySelector('.btn1').addEventListener('click', () => {
    ageInLife()
})

function ageInLife() {
    const yourAge = prompt(`What is your age?`);
    const count = ` ${2022 - yourAge}`;
    console.log(count)
    answer.textContent = `You born in ${count}`


}

function catgenerator() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-generator')
    image.src = ' https://i.pinimg.com/originals/eb/e4/a3/ebe4a37984a8745e78555906765df486.jpg '
    div.appendChild = (image);

}
/**
 sukurti image,nes paskui i ja pridesim foto su appendChild
 paskui prisijunkti i div flex box,pajungus nuotrauka prisidedu
 prie kiekvieno DIV po nuotrauka
 */

// const myList = document.getElementById('mylist')

// const fruits = ['banana', 'orange']

// for (let fruit of fruits) {
//     let newListItem = document.createElement('li');
//     newListItem.textContent = fruit;
//     myList.appendChild(newListItem)
// }