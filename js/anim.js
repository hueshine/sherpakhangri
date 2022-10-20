


gsap.fromTo(
  ".banner-text .text-reveal",
  { opacity: 0, clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)", y: 50 },
  {
    opacity: 1,

    duration: 1,
    delay: 1,
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
    y: 0,
  }
);

// https://codepen.io/snorkltv/pen/PoNPmxV

// let animContainer = document.querySelectorAll(".anim-container .anim-part");

// animContainer.forEach((container) => {
//   let heading = container.querySelector(" .heading h3");
//   let para = container.querySelector("  p");
//   let button = container.querySelector(" .button");
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       // scrub: 4,
//       trigger: container,
//       start: "top center",
//       end: "bottom bottom",
//       markers: true
//     },
//   });

//   tl.fromTo(
//     heading,
//     { clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)", y: 50, opacity: 0 },
//     {
//       duration: 0.8,
//       clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
//       y: 0,
//       opacity: 1,
//     }
//   )

//     .from(para, { opacity: 0, y: 50 })

//     .from(button, 1, {
//       x: 100,

//       opacity: 0,
//       stagger: 0.5,
//     });
// });

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer-animations",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
    pin: true,
  },
});

tl.fromTo(
  ".bottom-img",
  {
    y: 0,
  },
  {
    y: -150,
  }
);

tl.fromTo(
  ".cloud-left",
  {
    scrollTrigger: {
      trigger: ".footer-animations",
      start: "top center",
      end: "bottom bottom",
      scrub: 3,
      duration: 10,
    },

    x: -100,
    opacity: 0,
  },
  {
    xPercent: 100,
    scale: 1.2,
    opacity: 1,
  },
  0
);

tl.fromTo(
  ".cloud-right",
  {
    x: 100,
    opacity: 0.5,
  },
  {
    xPercent: -100,
    scale: 1.2,
    opacity: 1,
  },
  0
);

tl.fromTo(
  ".top-img",
  {
    scale: 1,
  },
  {
    scale: 1.3,
  },
  0
);

gsap.to(".logo-text", {
  scrollTrigger: {
    trigger: ".footer-animations",
    start: "top bottom",
    end: "bottom center",

    scrub: 1,
  },
  scale: 1.1,
  y: -300,
});

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

gsap.utils.toArray(".cloud-slides").forEach(($el) => {
  const width = $el.clientWidth;
  const delay = 2;
  const repeatDelay = 1;

  gsap.set($el, {
    opacity: 1,
  });

  gsap.fromTo(
    $el,
    {
      xPercent: -50,
      y: 200,
      opacity: 0.5,
    },
    {
      duration: 15,
      x: width,
      y: -200,
      repeat: -1,
      delay,
      repeatDelay,
      ease: "none",
      opacity: 1,
    }
  );
});
