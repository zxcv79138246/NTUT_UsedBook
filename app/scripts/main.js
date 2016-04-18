$(function(){
  var advertId = 0;
  $('.post-arrow').click(function(){
    if (advertId == -1) {
      advertId = 1;
    }else {
      advertId--;
    }
    advertId = (advertId)%2;
    var move = (advertId + 1) * -960;
    console.log('adverId:' + advertId + 'move: '+ move);
    $('.slide').stop().animate(
      {left: move + 'px'},
      {
        duration: 1000,
        easing: 'easeInOutCubic'
      }
    );
  });

  $('.next-arrow').click(function(){
    if (advertId == 1) {
      advertId = -1;
    }else {
      advertId++;
    }
    advertId = (advertId)%2;
    var move = (advertId + 1) * -960;
    console.log('adverId:' + advertId + '  move: '+ move);
    $('.slide').stop().animate(
      {left: move + 'px'},
      {
        duration: 1000,
        easing: 'easeInOutCubic'
      }
    );
  });
});
