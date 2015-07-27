var iTunes = require('local-itunes');
iTunes.playerState(function(error, state){
  if (state === 'paused') iTunes.play();
});