// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  //new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  TeachGame = new GameManager(8, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  //TeachGame = new GameManager(8, KeyboardInputManager, HTMLActuator);
});

setInterval(function() {
  
  nextStep = Math.round(Math.random()*3);
  TeachGame.move(nextStep);

}, 250);