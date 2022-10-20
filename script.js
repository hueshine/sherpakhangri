
// Allows you to hijack the scrollTop and/or scrollLeft getters/setters for a particular scroller 
// element so that you can implement things like smooth scrolling or other custom effects.

// SmoothScroller library does Scrolljacking (hijack the native scroll behaviour) = Some method of 
// scrolling other than the native scrolling is used.



gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 2,
    smoothTouch: 0.1,
    normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
    ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
    effects: true,
    preventDefault: true
  });