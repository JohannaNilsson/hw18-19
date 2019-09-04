
//import Brusher from 'brusher';

//const brusher = new Brusher({
  //  image: 'stupidbackground.png', // Path of the image to be used as a brush
  //  keepCleared: true,     // Put the blur back after user has cleared it
  //  stroke: 80,            // Stroke size for the brush
   // lineStyle: 'round',    // Brush style (round, square, butt)
  //  autoBlur: false,       // Brusher will use the provided image for the blurry background
   // autoBlurValue: 15,     
//  });
  
//  brusher.init();

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
