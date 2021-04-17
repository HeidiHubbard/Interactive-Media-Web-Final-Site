// Timing
const typingAnimationDuration = 2000;
const scrollDelay = 2000;
const scrollDuration = 750;

$(document).ready(() => {
  /* Hamburger Button */
  $(".hamburger-btn, .nav a").on('click', () => {
    $(".hamburger-btn, .nav").toggleClass('active').toggleClass('inactive');
  })
  
  /* Typing Text */
	const typeText = (target, text, step, duration) => {
  	if(step > text.length) {
    	return;
    }
    
  	$(target).text(text.substr(0, step));
    
    setTimeout(() => {
    	typeText(target, text, step + 1, duration);
    }, duration / text.length);
  };

	$("[typingText]").each(function() {
  	const text = $(this).attr('typingText');

    typeText(this, text, 1, typingAnimationDuration);
  });

  if($("#about").length != 0) {
    /* Auto Scroll */
    $('html, body').delay(typingAnimationDuration + scrollDelay).animate({
      scrollTop: $("#about").offset().top - 40
    }, scrollDuration);
  }

  /* Fade On Scroll */
  const fadeInOnScroll = (target) => {
    $(window).on('scroll', () => {
      checkFadeInOnScroll(target);
    });

    checkFadeInOnScroll(target);
  };

  const checkFadeInOnScroll = (target) => {
  	if($(target).hasClass('fade-in')) {
      return;
    }
    
    const topOffset = $(target).offset().top;
    const windowHeight = $(window).height();
    const topOfWindow = $(window).scrollTop();
    console.log(topOfWindow + windowHeight, topOffset)
    if (topOfWindow + windowHeight - 100 > topOffset) {
      $(target).addClass("fade-in");
    }
  }

  $(".fade-in-on-scroll").each(function() {
    fadeInOnScroll(this);
  });

  /* Slide On Scroll */
  const slideInOnScroll = (target) => {
    $(window).on('scroll', () => {
      checkSlideInOnScroll(target);
    });

    checkSlideInOnScroll(target);
  };

  const checkSlideInOnScroll = (target) => {
  	if($(target).hasClass('slide-in')) {
      return;
    }
    
    const topOffset = $(target).offset().top;
    const windowHeight = $(window).height();
    const topOfWindow = $(window).scrollTop();
    console.log(topOfWindow + windowHeight, topOffset)
    if (topOfWindow + windowHeight - 100 > topOffset) {
      $(target).addClass("slide-in");
    }
  }

  $(".slide-in-on-scroll").each(function() {
    slideInOnScroll(this);
  });
});

