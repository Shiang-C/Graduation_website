$(function() {
  $('#top').click(function() {
    $('html,body').animate({scrollTop: '0px'}, 800);
  });
  $('#news').click(function() {
    $('html,body').animate({scrollTop: $('.news').offset().top}, 300);
  });
  $('#ceremony').click(function() {
    $('html,body').animate({scrollTop: $('.ceremony').offset().top}, 300);
  });
  $('#movie').click(function() {
    $('html,body').animate({scrollTop: $('.movie').offset().top}, 300);
  });
  $('#process').click(function() {
    $('html,body').animate({scrollTop: $('.process').offset().top}, 300);
  });
  $('#activity').click(function() {
    $('html,body').animate({scrollTop: $('.activity').offset().top}, 300);
  });
  $('#contact').click(function() {
    $('html,body').animate({scrollTop: $('.contact').offset().top}, 300);
  });
  $('#information').click(function() {
    $('html,body').animate({scrollTop: $('.information').offset().top}, 300);
  });
})
$(function(){
    // 先取得 #cart 及其 top 值
    var $cart = $('#nav-wrapper'),
      _top = $cart.offset().top = 10;
    // 當網頁捲軸捲動時
    var $win = $(window).scroll(function(){
      // 如果現在的 scrollTop 大於原本 #cart 的 top 時
      if($win.scrollTop() >= _top){
        // 如果 $cart 的座標系統不是 fixed 的話
        if($cart.css('position')!='fixed'){
          // 設定 #cart 的座標系統為 fixed
          $cart.animate({height:"3%"},500);
          $cart.css({
            position: 'fixed',
            top: 0,
            background: '#000',
            'border-color': '#EEE',
            'border-weight': '0.5px',
            'border-style': 'solid'
          });
        }
      }else{
        // 還原 #cart 的座標系統為 absolute
        $cart.animate({height:"-3%"},500);
        $cart.css({
           position: 'absolute',
           background: 'transparent',
           'border-color': 'transparent'
        });
      }
    });
});
