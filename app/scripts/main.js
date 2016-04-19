$(function(){

  //廣告
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

  //浮筐置中
  var modalCenter = function (){
    var top = Math.max($(window).height() - $('#modal').outerHeight(), 0) / 2;
    var left = Math.max($(window).width() - $('#modal').outerWidth(), 0) / 2;
    $('#modal').css({
      top: top + $(window).scrollTop(),
      left: left + $(window).scrollLeft()
    });
  };

  //浮筐關閉
  var modalClose = function (){
    $('#modal').hide();
    $('#overlay').hide();
  };

  //登錄書籍
  $('#sell').click(function (){
    $('.modal-content').load("modal/sellbook.html",function (){
      modalCenter();
      $('#modal').show();
      $('#overlay').show();
    });
  });

  //徵求收購
  $('#want').click(function (){
    $('.modal-content').load("modal/wantbook.html",function (){
      modalCenter();
      $('#modal').show();
      $('#overlay').show();
    });
  });

  //會員中心
  $('#member').click(function(){
    $('.modal-content').load("modal/member.html",function(){
      modalCenter();
      $('#modal').show();
      $('#overlay').show();
    });
  });

  //sellbook list 點擊
  $('.sellitem').click(function() {
    $('.modal-content').load("modal/sellbookitem.html",function(){
      modalCenter();
      $('#modal').show();
      $('#overlay').show();
    });
  });

  //收購詳細資料
  $('.viewmore').click(function (){
    $('.modal-content').load("modal/wantbookdetail.html",function(){
      modalCenter();
      $('#modal').show();
      $('#overlay').show();
    });
  });


  $('.modal-close').click(function (){
    modalClose();
  });

  $('#overlay').click(function (){
    modalClose();
  });
});
