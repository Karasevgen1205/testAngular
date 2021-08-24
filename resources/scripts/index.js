import LottiePlayer from "./shared/lottie-player.js";
import Test from "./shared/test.js";

document.addEventListener("DOMContentLoaded", async () => {
  window.refs = {
    lottiePlayer: {
      init: () => new LottiePlayer(),
      selectors: [".lottie"],
    },
    test: {
      init: () => new Test(),
      selectors: [".test"],
    },
  };

  Object.keys(window.refs).forEach((ref) => {
    if (
      window.refs[ref].hasOwnProperty("init") &&
      window.refs[ref].selectors.join(",").length > 0
    ) {
      window.refs[ref].class = window.refs[ref].init();
    }
  });
});
