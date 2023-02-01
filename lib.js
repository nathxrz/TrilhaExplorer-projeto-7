// var
const btnTry = document.querySelector('#btnImage');
const btnAgain = document.querySelector('#btnAgain');

let imageRandom;
let imagePrevious;

let image = document.querySelector('#msg-luck');

const screen1 = document.querySelector('.screen01');
const screen2 = document.querySelector('.screen02');

//events
btnTry.addEventListener('click', generateImage);
btnAgain.addEventListener('click', toggleScreen);

//functions
function generateImage(event){
  event.preventDefault();
  
  toggleScreen();

  while(imagePrevious == imageRandom){
    imageRandom = Math.ceil(Math.random() * 10);
  }

  imagePrevious = imageRandom;
  image.setAttribute('src', `./assets/luck${imageRandom}.svg`);
}

function toggleScreen(){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}