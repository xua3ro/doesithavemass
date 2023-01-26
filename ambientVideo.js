var ambientVideo = document.getElementById("ambientVideo");

var io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ambientVideo.play();
      } else {
        ambientVideo.pause();
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  }
);

// after confirming the element exists, look for the #ambientVideo when visible in viewport
if (ambientVideo) {
  io.observe(ambientVideo)
}