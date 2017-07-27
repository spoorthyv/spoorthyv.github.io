(function() {
  var $button4 = $('.js-button4');
  var $button3 = $('.js-button3');
  var $button2 = $('.js-button2');
  var $button1 = $('.js-button1');
  var $title = $('.js-title');
  var $pics = $('.js-pics');


  $button1.on('click', {index: 0}, showScreen);
  $button2.on('click', {index: 1}, showScreen);
  $button3.on('click', {index: 2}, showScreen);
  $button4.on('click', {index: 3}, showScreen);
  $button5.on('click', {index: 4}, showScreen);

  function showScreen(e) {
  	var targetX = -289 * e.data.index + 20;
    $pics.css('left', targetX);
  }
})();