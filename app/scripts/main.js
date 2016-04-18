$(function(){
  var advertId = 1;
  $('.post-arrow').click(function(){
    if (advertId == 0) {
      advertId = -2;
    }else {
      advertId++;
    }
    advertId = (advertId)%3;
    var move = advertId * 960;
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
    advertId--;
    advertId = (advertId)%3;
    var move = advertId * 960;
    console.log('adverId:' + advertId + 'move: '+ move);
    $('.slide').stop().animate(
      {left: move + 'px'},
      {
        duration: 1000,
        easing: 'easeInOutCubic'
      }
    );
  });
});
