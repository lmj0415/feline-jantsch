let slideIndex = 0;

/* to be replaced by server delivery */
let texts = ["Dartmoor","London1", "London2", "London3", "London4","London5",]
const links = ["./src/images/dartmoor.png","./src/images/img-1.jpg","./src/images/img-1.jpg","./src/images/img-2.jpg","./src/images/img-3.jpg","./src/images/img-3.jpg"];


function start(){
    for (i = 0; i < links.length; i++) {
      document.getElementById('dotSlider').innerHTML += `
          <img class="dot" src="${links[i]}" onclick="showSlides(${i})" id='dot-${i}'>`
    };
    showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n){
  if (n === links.length) {slideIndex = 0}
  else if (n < 0) {slideIndex = links.length - 1}
  else {slideIndex = n}

  document.getElementById('text').innerHTML = texts[slideIndex];
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex].classList.add("active");
  centerElementInScroll(`dot-${slideIndex}`, 'dotSlider')
  
  document.getElementById('background').style = `background-image: url(${links[slideIndex]});`
}

function centerElementInScroll(elementId, containerId) {
  const container = document.getElementById(containerId);
  const element = document.getElementById(elementId);

  if (element && container) {
    // const containerRect = container.getBoundingClientRect();
    // const elementRect = element.getBoundingClientRect();

    const offsetLeft = element.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2);
    const offsetTop = element.offsetTop - (container.clientHeight / 2) + (element.clientHeight / 2);

    container.scrollTo({
      left: offsetLeft,
      top: offsetTop,
      behavior: 'smooth' // optional: adds smooth scrolling
    });
  }
}


// Swipe event listener
var xDown = null;                                                        
var yDown = null;
var xDiff = null
var yDiff = null

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};

function handleTouchMove(evt) {
  if ( ! xDown || ! yDown ) {
      return;
  }

  var xUp = evt.touches[0].clientX;                                    
  var yUp = evt.touches[0].clientY;

  xDiff = xDown - xUp;
  yDiff = yDown - yUp;
            
};

function handleTouchEnd(evt) {
  if ( ! xDiff ) {
      return;
  }                                                                                                      
  if ( xDiff > 0 ) {
      plusSlides(1)
  } else {
      plusSlides(-1)
  }      
  
  xDown = null;                                                        
  yDown = null;
};
     