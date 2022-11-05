$(document).ready(()=>{

  const animate = (selector, event, animation)=> {
    $(selector).on(event, (event)=> {
      $(event.currentTarget).addClass('animated ' + animation).one('animationend', ()=> {
        $(selector).removeClass('animated ' + animation)
      });
    })
  };


  animate('.stat', 'mouseenter', 'pulse');


  const navDisplay = ()=> {
    const screenWidth = $(window).innerWidth();
    if (screenWidth > 910) {
      $('.main-navigation').show();
      $('.nav-button').hide();
      $('.nav-close').hide();
    } else {
      $('.main-navigation').hide();
      $('.nav-button').show();
      $('.nav-close').hide();
    };
  };

  navDisplay();

  const resizeNavDisplay = ()=> {
    const screenWidth = $(window).width()
    $(window).on('resize', ()=> {
      navDisplay();
      return $(window).width();
    });
  };

  resizeNavDisplay();

  const navToggle = ()=> {
    $('.nav-button').on('click', ()=> {
      $('.nav-button').hide();
      $('.nav-close').fadeIn(1200);
      $('.main-navigation').fadeIn(600);
    });
  }

  navToggle();

  const navClose = ()=> {
    $('.nav-close').on('click', ()=> {
      $('.nav-close').hide();
      $('.nav-button').fadeIn(1200);
      $('.main-navigation').fadeOut(600);
    })
  }

  navClose();

});
