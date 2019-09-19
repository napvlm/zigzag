// navbar toggle
$(document).ready(function() {

// GSAP animations
  (function($){
    var social = $('.social'),
      lang = $('.lang-btns'),
      leftphrase = $('.left-phrase'),
      phone = $('.phone'),
      fade = $('.fadein');

    TweenLite.from(social, 1, {y:200, ease:Power3.easeOut});
    TweenLite.from(social, 1, {autoAlpha:0, delay: 0.3});

    TweenLite.from(leftphrase, 1, {y:-200, ease:Power3.easeOut});
    TweenLite.from(leftphrase, 1, {autoAlpha:0, delay: 0.3});

    TweenLite.from(lang, 1, {y:200, ease:Power3.easeOut});
    TweenLite.from(lang, 1, {autoAlpha:0, delay: 0.3});

    TweenLite.from(phone, 1, {y:-200, ease:Power3.easeOut});
    TweenLite.from(phone, 1, {autoAlpha:0, delay: 0.3});

    TweenLite.from(fade, 1, {autoAlpha:0, delay: 0.6});
  })(jQuery);
    
  var Menu = (function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');
    var brand = document.querySelector('.menu__brand');
    var menuItems = document.querySelectorAll('.menu__item');
    var contactbtn = document.querySelector('.contact_link');
    var casebtn = document.querySelector('.cases_menu_link');
    
    var active = false;
    
    var toggleMenu = function() {
      if (!active) {
        menu.classList.add('menu--active');
        menuList.classList.add('menu__list--active');
        brand.classList.add('menu__brand--active');
        burger.classList.add('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add('menu__item--active');
        }
        
        active = true;
      } else {
        menu.classList.remove('menu--active');
        menuList.classList.remove('menu__list--active');
        brand.classList.remove('menu__brand--active');
        burger.classList.remove('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
        }
        
        active = false;
      }
    };
    
    var bindActions = function() {
      burger.addEventListener('click', toggleMenu, false);
    };
    
    var menuItemClicked = function() {
      contactbtn.addEventListener('click', toggleMenu, false);
      casebtn.addEventListener('click', toggleMenu, false);
    }
    
    var init = function() {
      bindActions();
      menuItemClicked();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();
  
});

$(window).mousemove(function(e) { 
  
  $(".cursor").css({
    left: e.pageX,
    top: e.pageY
  })
  
})

$("a, .burger, .control")
.on("mouseenter", function() {
  
  $('.cursor').addClass("active")
  
})
.on("mouseleave", function() {
  
  $('.cursor').removeClass("active")
  
})

