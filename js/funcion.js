$(document).ready(function() {


  $("#btnmenu").click(function() {
    $("#menu").slideToggle();
  });


  $('body').on('click', "#menu li a",function(e) {
    var dataid = $(this).attr('href');
    if($(window).width()<768){
      $("#menu").slideToggle();
      $('html, body').animate({scrollTop: ($(dataid).offset().top-100)}, 500);
    }else{
      $('html, body').animate({scrollTop: ($(dataid).offset().top)}, 500);
    }

    e.preventDefault();
    e.stopPropagation();
  });

  onScroll();
  $(document).on("scroll", onScroll);
  function onScroll(){
    var scrollPos = $(document).scrollTop();
    $('#menu li').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.children('a').attr("href"));
      if (refElement.position().top <= (scrollPos + (50)) && refElement.position().top + refElement.innerHeight() > scrollPos) {
        $('#menu li').removeClass("active");
        currLink.addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
    });
  }



});
