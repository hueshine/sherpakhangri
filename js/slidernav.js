
// for pagination
// https://codepen.io/bassta/pen/vYJQQb
// https://codepen.io/gvrban/pen/qjbpaa

// Testimonial section

( function($) {
  
  $(document).ready(function() {
    
    var s           = $('.testimonial'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slider-slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })

    });
          
  });
})(jQuery);


let section = document.getElementById('section'),
    title = document.getElementById('title'),
    mark = title.querySelector("span"),
    dot = document.querySelector(".dot");

gsap.set(dot, {
  width: "142vmax", // ensures it fills every part of the screen. 
  height: "142vmax",
  xPercent: -50, // center the dot in the section area
  yPercent: -50,
  top: "50%",
  left: "50%"
});

let tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: section,
			start: "top top",
			end: "bottom top",
			markers: true,
			scrub: 1.5, 
			pin: section,
			pinSpacing: true,
      invalidateOnRefresh: true,
		},	
		defaults: { ease: "none" }
	});

tl1
  .to(title, { opacity: 1 })
  .fromTo(dot, {
      scale: 0,
      x: () => {
        let markBounds = mark.getBoundingClientRect(),
            px = markBounds.left + markBounds.width * 0.54; // dot is about 54% from the left of the bounds of the character
        return px - section.getBoundingClientRect().width / 2;
      },
      y: () => {
         let markBounds = mark.getBoundingClientRect(),
            py = markBounds.top + markBounds.height * 0.73; // dot is about 73% from the top of the bounds of the character
        return py - section.getBoundingClientRect().height / 2;
      }
   }, { 
    x: 0,
    y: 0,
    ease: "power3.in",
    scale: 1
});