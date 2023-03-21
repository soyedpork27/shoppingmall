

$(document).ready(function(){


  // 토글버튼
  const toggle_btn = $('.toggle_btn');

  // 바디영역
  const body_area = $('.body_area');

  const screen = $('.screen');
  toggle_btn.click(function(){
    body_area.animate({'left':'300px'},500);
    screen.show();
    screen.animate({'left':'300px'},500);
  });

  // gnb X 버튼
  const exit_btn = $('.fa-xmark');

  exit_btn.click(function(){
    body_area.animate({'left':'0'},500);
    screen.hide();
  });



  // gnb li
  const one_depth = $('.gnb > li');


  one_depth.click(function(){
    $(this).find('.two_depth').stop().animate({'height':'135px'},500);
    $(this).siblings().find('.two_depth').stop().animate({'height':'0'},500);

    if($(this).find('.two_depth').height() > 0){
      $(this).find('.two_depth').stop().animate({'height':'0'},500);
    }

  });




  // 컨트롤 버튼 클릭 시 슬라이드

  const ctrl_btn02 = $('.sect02-ctrl_btn');
  const slide02 = $('.sect02-slide');

  ctrl_btn02.click(function(){
    $(this).removeClass('on01');
    $(this).addClass('on01');
    $(this).siblings().removeClass('on01');
    let ind_n = $(this).index();
    let width = slide02.find('img').width();
    let margin =  ind_n * width;
    slide02.stop().animate({'margin-left' : - margin },800);
  });






  // Social media 슬라이드

  const l_btn01 = $('.media-left');
  const r_btn01 = $('.media-right');
  const slide03 = $('.sect06-slide');
  slide_width = slide03.width()/100*11;
  {
    let n = 0;
    l_btn01.click(function(){
      if(n==0){
        n=0;
      }
      else{
        n--;
        slide03.stop().animate({'margin-left':-slide_width*n},500);
        console.log(n);
      }
    });
  
    r_btn01.click(function(){
      if(n==6){
        n=6;
      }
      else{
        n++;
        slide03.stop().animate({'margin-left':-slide_width*n},500);
        console.log(n);
      }
    });
  }






  const clothes = $('.sect04-cloth_wrap li');

  clothes.click(function(){
    $(this).find('.modal').show();
  });

  const modal_exitbtn = $('.modal_exit');

  modal_exitbtn.click(function(){
    $(this).parent().parent().fadeOut();
  });








});