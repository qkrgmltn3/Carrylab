$(function () {
  $(document).ready(function () {
    $("#gnb .dep1_con").eq(a_num).addClass("active");
    $("#s_tab .dep1_con").eq(b_num).addClass("active");
  });
  $("#s_tab_wrap > a").on("click", function () {
    $(this).toggleClass("active");
    $("#s_tab").stop().slideToggle();
  });

  $(".category_tab").slick({
    slidesPerView: 5,
    roundLengths: true,
    slidesPerView: "auto",
    variableWidth: true,
    swipeToSlide: true,
    infinite: false,
  });

  $('.con3_slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
  });

  $('.slide_wrap').slick({
    dots: true,
    arrows: false,
    infinite: true,  
    dotsClass: 'bullet'
  });
  document.querySelector('.s13 .bullet>li:nth-child(1)').innerHTML = "인터뷰<br>ver.";
  document.querySelector('.s13 .bullet>li:nth-child(2)').innerHTML = "기획<br>ver.";
  document.querySelector('.s13 .bullet>li:nth-child(3)').innerHTML = "쇼츠<br>ver.";
});


