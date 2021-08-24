import "@lottiefiles/lottie-player";

export default class LottiePlayer {
  constructor() {
    this.init();
  }

  init() {
    const lottiePlayers = document.querySelectorAll("lottie-player");

    if (!lottiePlayers.length) return;

    const lottieObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let target = entry.target;
          if (target.dataset.src) {
            target.load(target.dataset.src);
            if (target.getAttribute("autoplay")) {
              target.play();
            }
          }
          lottieObserver.unobserve(target);
        }
      });
    });

    lottiePlayers.forEach((p) => {
      lottieObserver.observe(p);
    });
  }
}
