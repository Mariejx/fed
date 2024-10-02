// JavaScript Document
console.log("hi");

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function changeImage(thumbnail) {
  const mainImage = document.getElementById('main-image');
  mainImage.src = thumbnail.src;
}

// Selecteer de elementen
const textContainer = document.querySelector('.text-container');
const imageContainer = document.querySelector('.image-container img');

// Voeg een event listener toe voor de hover
textContainer.addEventListener('mouseenter', () => {
  imageContainer.style.transform = 'translateX(30px) scale(1.1) rotate(3deg)';
});

textContainer.addEventListener('mouseleave', () => {
  imageContainer.style.transform = 'translateX(0px) scale(1) rotate(0deg)';
});
