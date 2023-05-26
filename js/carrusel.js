let i = 0;
let img = document.querySelector(".imagen");

let arrayImg = [
   "../img/energia-hidraulica.jpg",
   "../img/energia-solar.jpg",
   "../img/energia-eolica.jpg"
];

function anterior() {
   i--;
   if (i < 0) {
      i = arrayImg.length - 1;
   }
   img.src = arrayImg[i];
}

function siguiente() {
   i++;
   if (i >= arrayImg.length) {
      i = 0;
   }
   img.src = arrayImg[i];
}
