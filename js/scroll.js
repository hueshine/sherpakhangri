

// Allows you to hijack the scrollTop and/or scrollLeft getters/setters for a particular scroller 
// element so that you can implement things like smooth scrolling or other custom effects.

// SmoothScroller library does Scrolljacking (hijack the native scroll behaviour) = Some method of 
// scrolling other than the native scrolling is used.

// GreenSock has added functionality via ScrollTrigger.scrollerProxy() to enable ScrollTrigger to work 
// with smooth scrolling libraries so that you as the developer have the options you need.


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 2,
    smoothTouch: 0.1,
    normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
    ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
    effects: true,
    preventDefault: true
  });


// // 3rd party library setup:
// const bodyScrollBar = Scrollbar.init(document.body, { damping: 0.1, delegateTo: document });

// // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element: 
// ScrollTrigger.scrollerProxy(document.body, {
//   scrollTop(value) {
//     if (arguments.length) {
//       bodyScrollBar.scrollTop = value; // setter
//     }
//     return bodyScrollBar.scrollTop;    // getter
//   },
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   }
// });

// // when the smooth scroller updates, tell ScrollTrigger to update() too: 
// bodyScrollBar.addListener(ScrollTrigger.update);