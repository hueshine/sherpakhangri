
// Allows you to hijack the scrollTop and/or scrollLeft getters/setters for a particular scroller 
// element so that you can implement things like smooth scrolling or other custom effects.

// SmoothScroller library does Scrolljacking (hijack the native scroll behaviour) = Some method of 
// scrolling other than the native scrolling is used.


// Temba Tsheri Intro
var introMain = document.querySelector(".intro_main");

if (introMain) {
    var lists = introMain.querySelectorAll(".timeline li");
    var textDiv = introMain.querySelectorAll(".text_container .years");

    lists.forEach((list, index) => {
    list.addEventListener("click", () => {
        textDiv.forEach((div) => {
        div.classList.remove("active");
        });
        textDiv[index].classList.add("active");

        lists.forEach((item) => {
        item.classList.remove("active");
        });

        list.classList.add("active");
    });
    });
}

if (introMain) {
    var line1 = $("#line1");
    var line2 = $("#line2");
    var line3 = $("#line3");
    var div1 = $("#list1");
    var div2 = $("#list2");
    var div3 = $("#list3");
    var div4 = $("#list4");

    var x1 = div1.offset().left + div1.width() / 2;
    var y1 = div1.offset().top + div1.height() / 2;
    var x2 = div2.offset().left + div2.width() / 2;
    var y2 = div2.offset().top + div2.height() / 2;
    var x3 = div3.offset().left + div3.width() / 2;
    var y3 = div3.offset().top + div3.height() / 2;
    var x4 = div4.offset().left + div4.width() / 2;
    var y4 = div4.offset().top + div4.height() / 2;

    line1.attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
    line2.attr("x1", x2).attr("y1", y2).attr("x2", x3).attr("y2", y3);
    line3.attr("x1", x3).attr("y1", y3).attr("x2", x4).attr("y2", y4);
}


// testimonials
const interleaveOffset = 0.75;

var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  speed: 800,
  mousewheelControl: true,
  watchSlidesProgress: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // type: 'bullets',
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + ('0' + (index + 1)) + '</span>';
    // }
  },
  on: {
    progress: function() {
      let swiper = this;

      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress;
        let innerOffset = swiper.height * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
          y: innerTranslate,
        });
      }
    },
    setTransition: function(slider, speed) {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
});

var swiper = new Swiper('.exp_slider', {
    slidesPerView: 3,
    grabCursor: true,
    speed: 500,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    }
});

const $container = $('.testimonial ');
const $items = $('.slider-wrapper');

const getMaxWidthHeight = function () {
  maxWidth = $items.width();
  maxHeight = $items.height();
};
getMaxWidthHeight();

ScrollTrigger.addEventListener("refreshInit", getMaxWidthHeight);

var tl = gsap.timeline()
.to($items, { x: function () {return -maxWidth}})

  gsap.timeline({
    ease: 'linear',
    scrollTrigger: {
      trigger: $container,
      pin: true,
      pinSpacing: true,
      end: function() { return '+=' + maxWidth},
      scrub: 2,
      invalidateOnRefresh: true
    }
  }).add(tl)


