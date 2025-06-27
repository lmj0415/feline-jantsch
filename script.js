let slideIndex = 0;

/* to be replaced by server delivery */
let texts = ["Dartmoor","London1", "London2", "London3", "London4","London5",]
const links = ["./src/images/dartmoor.png","./src/images/img-1.jpg","./src/images/img-1.jpg","./src/images/img-2.jpg","./src/images/img-3.jpg","./src/images/img-3.jpg"];

// valid positions -> start, center, end
data = [
    {
        "link": "./src/images/london_1.jpg",
        "heading": "London",
        "text": "Die Heimat berühmter Dedektive, Engel und Dämonen. Wo sonst sollte unsere Reise starten",
        "position": "start"
    },
    {
        "link": "./src/images/Trafalgar.jpg",
        "heading": "Trafalgar Square",
        "text": "Auf den Spuren deiner Helden...",
        "position": "start"
    },
    {
        "link": "./src/images/Tusseaud.jpg",
        "heading": "Madame Tussauds",
        "text": "...Die celebreties mal in voller Größe bestaunen...",
        "position": "center"
    },
    {
        "link": "./src/images/bakerstreet.jpg",
        "heading": "Die Bakerstreet",
        "text": "...Oder warum nich gleich bei ihnen zuhause vorbei schauen.",
        "position": "start"
    },
    {
        "link": "./src/images/Dungeon.jpg",
        "heading": "Londoner Dungeon",
        "text": "...Oder an den Flammen des brennenden Londons erwärmen...",
        "position": "end"
    },
    {
        "link": "./src/images/escape.png",
        "heading": "Official Sherlock Esacpe",
        "text": "...oder alternativ unsere Köpfe zum rauchen bringen.",
        "position": "end"
    },
    {
        "link": "./src/images/stJames.jpg",
        "heading": "St James Park",
        "text": "...erkunden wir London,...",
        "position": "start"
    },
    {
        "link": "./src/images/soho.jpg",
        "heading": "Soho",
        "text": "...bis in die letzten Buchladen.",
        "position": "start"
    },
    {
        "link": "./src/images/Borough.jpg",
        "heading": "Borough Market",
        "text": "...natürlich auch kulinarisch,...",
        "position": "start"
    },
    {
        "link": "./src/images/StPauls.jpg",
        "heading": "St. Pauls cathedral",
        "text": "...oder lassen uns den Abend über den Dächern Londons gut gehen.",
        "position": "end"
    },
    {
        "link": "./src/images/dartmoor.png",
        "heading": "Dartmoor",
        "text": "Und wenn wir genug von der Großstadt haben.",
        "position": "end"
    },
    {
        "link": "./src/images/dartmoor_sherlock.png",
        "heading": "Dartmoor",
        "text": "...dann warten Abenteure fern von dem Gewimmel.",
        "position": "end"
    },
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
  console.log(xDiff, yDiff) 
  if ( ! xDiff || Math.abs(yDiff) > Math.abs(xDiff) || Math.abs(xDiff) < 30) {
      return;
  }                                                                                                     
  if ( xDiff > 0 ) {
      plusSlides(1)
  } else {
      plusSlides(-1)
  }      
  
  xDown = null;                                                        
  yDown = null;
  xDiff = null
  yDiff = null
};
     
