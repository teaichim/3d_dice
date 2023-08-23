var cube = document.querySelector('.cube');
var button = document.querySelector('.btn');
var currentClass = '';

function randNumber() {
  return Math.floor(Math.random() * 6 );
}

function changeSide() {
  var diceFace = randNumber(); 

  var showClass = '';
  var faces = ["bottom", "top", "left", "right", "back", "front"];
  showClass = 'show-' + faces[diceFace];

  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}

// Set initial side
changeSide();

button.addEventListener('click', changeSide); 


  
  
// set initial side
changeSide();

button.addEventListener( 'change', changeSide );