$(document).ready ( function() {

   //PLUGIN

   new WOW().init();

   //SCROLLER

   $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
         $('#scroller').fadeIn();
      } else {
         $('#scroller').fadeOut();
      }
   });

   $('#scroller').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 400);
      return false;
   });




   //HEADER MOBILE MENU

   $('#mobile-menu').on('click', function () {
      $(this).toggleClass('mobile-menu-open');
      $(this).siblings('.main-header-menu').toggleClass('mobile-menu-active');
      $(this).siblings('.main-header-menu').find('.main-header-list').find('.dropdown-menu').addClass('dropdown-menu-active');
      $(this).siblings('.main-header-menu').find('.main-header-list').find('svg').toggleClass('svg-active');
   });

   $('.main-header-list').on('click', function () {
      $(this).find('.dropdown-menu').toggleClass('dropdown-menu-active');
      $(this).find('svg').toggleClass('svg-active');
   });



   //FOOTER MOBILE MENU

   $('.footer-dropdown-title').on('click', function () {
      $(this).find('svg').toggleClass('svg-active');
      $(this).siblings('.footer-dropdown').toggleClass('footer-dropdown-open');
   });

   
   //MAIN_CONTENT1 FEATURE PLAYER

   var interval = false;
   var timeout;
   var iteration = 0;

   function boxSwitcher() {
      var boxLoop = $('.feature-player > .feature-player-item');

      iteration--;

      var initTest = function () {
         iteration++;
         if (iteration >= boxLoop.length) {
            $(boxLoop[boxLoop.length - 1]).removeClass('item-active');
            iteration = 0;
         }

         var currentBox = boxLoop[iteration];
         var prevBox = boxLoop[iteration - 1];
         $(currentBox).addClass('item-active');
         $(prevBox).removeClass('item-active');
      }

      timeout = setTimeout(initTest, 5);

      if (interval) clearInterval(interval);

      interval = setInterval(function () {
         initTest()
      }, 3000);
   }
   setTimeout(boxSwitcher, 3000)

   $('.feature-player-item').hover(function () {
      clearInterval(interval)
      clearTimeout(timeout)
      $('.item-active').removeClass('item-active');
      $(this).addClass('item-active');
   }, function () {
      boxSwitcher();
      $(this).removeClass('item-active');
   });


})