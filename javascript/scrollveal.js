const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  origin: "bottom",
  duration: 10,
  desktop: true,
  mobile: false,
};
// Hero Section
ScrollReveal().reveal(".hero-title", {
  ...defaultProps,
  delay: 12,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});
ScrollReveal().reveal(".name", {
  ...defaultProps,
  distance: "0px",
  delay: 70,
  scale: 0,
});
ScrollReveal().reveal(".hero-cta", {
  ...defaultProps,
  delay: 120,
  duration: 2000,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});
ScrollReveal().reveal(".scroll-down-link", {
  ...defaultProps,
  delay: 200,
  origin: "top",
});

/* About Section */
ScrollReveal().reveal(".section-title", {
  ...defaultProps,
  delay: 40,
  distance: "0px",
});
ScrollReveal().reveal(".about-wrapper__image", {
  ...defaultProps,
  delay: 60,
  scale: 0.5,
});

ScrollReveal().reveal(".about-wrapper__info", {
  ...defaultProps,
  delay: 70,
  distance: "100px",
  origin: window.innerWidth > 768 ? "left" : "top",
});

/* Projects Section */
ScrollReveal().reveal(".project-wrapper__text", {
  ...defaultProps,
  delay: 60,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});

ScrollReveal().reveal(".project-wrapper__image", {
  ...defaultProps,
  delay: 60,
  scale: 0.9,
  origin: window.innerWidth > 768 ? "right" : "bottom",
});

/* Contact Section */
ScrollReveal().reveal(".contact-wrapper", {
  ...defaultProps,
  delay: 60,
});

ScrollReveal().reveal(".fa", {
  ...defaultProps,
  delay: 50,
  interval: 100,
});
