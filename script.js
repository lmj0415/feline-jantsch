let slideIndex = 0;

/* to be replaced by server delivery */
let texts = ["Dartmoor","London1", "London2", "London3", "London4","London5",]
const links = ["./src/images/dartmoor.png","./src/images/img-1.jpg","./src/images/img-1.jpg","./src/images/img-2.jpg","./src/images/img-3.jpg","./src/images/img-3.jpg"];

// valid positions -> start, center, end
data = [
    {
        "link": "./src/images/dartmoor.png",
        "heading": "Dartmoor",
        "text": "Zusammen können wir den Hund von Baskaville erlegen.",
        "position": "start"
    },
    {
        "link": "./src/images/img-1.jpg",
        "heading": "London",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat quam, imperdiet vitae metus sit amet, ornare congue nulla. Ut faucibus velit venenatis ornare efficitur. Nam hendrerit laoreet euismod.",
        "position": "center"
    },
    {
        "link": "./src/images/img-2.jpg",
        "heading": "London",
        "text": "Zusammen können wir den Hund von Baskaville erlegen.",
        "position": "start"
    },
    {
        "link": "./src/images/img-3.jpg",
        "heading": "London",
        "text": "Zusammen können wir den Hund von Baskaville erlegen.",
        "position": "end"
    }
]

function start(){
    for (i = 0; i < data.length; i++) {
      document.getElementById('dotSlider').innerHTML += `
          <img class="dot" src="${data[i]['link']}" onclick="showSlides(${i})" id='dot-${i}'>`
    };
    showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n){
  if (n === data.length) {slideIndex = 0}
  else if (n < 0) {slideIndex = data.length - 1}
  else {slideIndex = n}

  document.getElementById('slide-heading').innerHTML = data[slideIndex]["heading"];
  document.getElementById('slide-text').innerHTML = data[slideIndex]["text"];
  document.getElementById('slide-content').style.justifyContent = data[slideIndex]['position']

  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex].classList.add("active");
  centerElementInScroll(`dot-${slideIndex}`, 'dotSlider')
  
  document.getElementById('background').style = `background-image: url(${data[slideIndex]["link"]});`
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
     