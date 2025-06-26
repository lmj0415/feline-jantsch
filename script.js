let slideIndex = 1;

/* to be replaced by server delivery */
let texts = ["London1", "London2", "London3", "London4","London5","London1", "London2", "London3", "London4","London5","London1", "London2", "London3", "London4","London5","London1", "London2", "London3", "London4","London5","London1", "London2", "London3", "London4","London5","London1", "London2", "London3", "London4","London5"]
const links = ["./src/images/img-1.jpg","./src/images/img-1.jpg","./src/images/img-2.jpg","./src/images/img-3.jpg","./src/images/img-3.jpg","./src/images/img-1.jpg","./src/images/img-1.jpg","./src/images/img-2.jpg","./src/images/img-3.jpg","./src/images/img-3.jpg","./src/images/img-1.jpg","./src/images/img-1.jpg","./src/images/img-2.jpg","./src/images/img-3.jpg","./src/images/img-3.jpg","./src/images/img-1.jpg","./src/images/img-1.jpg","./src/images/img-2.jpg","./src/images/img-3.jpg","./src/images/img-3.jpg","./src/images/img-1.jpg","./src/images/img-1.jpg","./src/images/img-2.jpg","./src/images/img-3.jpg","./src/images/img-3.jpg","./src/images/img-1.jpg","./src/images/img-1.jpg","./src/images/img-2.jpg","./src/images/img-3.jpg","./src/images/img-3.jpg"];


function start(){
    let counter = 1;
    for (link of links) {
      document.getElementById('imgSlider').innerHTML += `
      <img src="${link}" id="slide-${counter}">`
      document.getElementById('dotSlider').innerHTML += `
          <img class="dot" src="${link}" onclick="currentSlide(${counter})" id='dot-${counter}'>`
      counter++;};
    currentSlide(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
if (n > links.length) {slideIndex = 1};
if (n < 1) {slideIndex = links.length};
document.location=`#slide-${slideIndex}`;
document.getElementById('text').innerHTML = texts[slideIndex-1];
let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";

document.location=`#dot-${slideIndex}`;

}
