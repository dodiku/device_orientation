/* might be good to use this library -
https://github.com/dorukeker/gyronorm.js */

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  $(".alpha").text("alpha (z axis, 0 to 360): " + alpha);
  $(".beta").text("beta (x axis, -180 to 180): " + beta);
  $(".gamma").text("gamma (y axis, -90 to 90): " + gamma);
  $(".absolute").text("absolute: " + absolute);
}

function handleMotion(event) {
  var acceleration = event.acceleration;
  var accelerationIncludingGravity = event.accelerationIncludingGravity;
  var rotationRate = event.rotationRate;
  var interval  = event.interval ;

  $(".accelerationX").text("acceleration x (east to west): " + acceleration.x);
  $(".accelerationY").text("acceleration y (south to north): " + acceleration.y);
  $(".accelerationZ").text("acceleration z (perpendicular to ground): " + acceleration.z);

  $(".accelerationIncludingGravityX").text("accelerationIncludingGravity x (east to west): " + accelerationIncludingGravity.x);
  $(".accelerationIncludingGravityY").text("accelerationIncludingGravity y (south to north): " + accelerationIncludingGravity.y);
  $(".accelerationIncludingGravityZ").text("accelerationIncludingGravity z (perpendicular to ground): " + accelerationIncludingGravity.z);

  $(".rotationRateAlpha").text("rotationRate alpha (perpendicular to the screen): " + rotationRate.alpha);
  $(".rotationRateBeta").text("rotationRate beta (left to right of the plane of the screen): " + rotationRate.beta);
  $(".rotationRateGamma").text("rotationRate gamma (bottom to top of the plane of the screen): " + rotationRate.gamma);

  $(".interval").text("interval time: " + interval);
}

$('body').append( "<div class='deviceorientation'></div>" );
$('.deviceorientation').append( "<p style='font-weight:300;'>deviceorientation</p>" );
$('.deviceorientation').append( "<p class='alpha'></p>" );
$('.deviceorientation').append( "<p class='beta'></p>" );
$('.deviceorientation').append( "<p class='gamma'></p>" );
$('.deviceorientation').append( "<p class='absolute'></p>" );
$('.deviceorientation').append( "</br>" );

$('body').append( "<div class='devicemotion'></div>" );
$('.devicemotion').append( "<p style='font-weight:300;'>devicemotion</p>" );
$('.devicemotion').append( "<p class='accelerationX'></p>" );
$('.devicemotion').append( "<p class='accelerationY'></p>" );
$('.devicemotion').append( "<p class='accelerationZ'></p>" );
$('.devicemotion').append( "</br>" );

$('.devicemotion').append( "<p class='accelerationIncludingGravityX'></p>" );
$('.devicemotion').append( "<p class='accelerationIncludingGravityY'></p>" );
$('.devicemotion').append( "<p class='accelerationIncludingGravityZ'></p>" );
$('.devicemotion').append( "</br>" );

$('.devicemotion').append( "<p class='rotationRateAlpha'></p>" );
$('.devicemotion').append( "<p class='rotationRateBeta'></p>" );
$('.devicemotion').append( "<p class='rotationRateGamma'></p>" );
$('.devicemotion').append( "</br>" );

$('.devicemotion').append( "<p class='interval'></p>" );


window.addEventListener("deviceorientation", handleOrientation, true);
window.addEventListener("devicemotion", handleMotion, true);

/*
music libraries
- web audio api:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
https://www.html5rocks.com/en/tutorials/webaudio/intro/
http://chimera.labs.oreilly.com/books/1234000001552/index.html

- timbre.js:
http://mohayonao.github.io/timbre.js/

- p5 sound:
https://p5js.org/reference/#/libraries/p5.sound
*/
