import LottiePlayer from "./shared/lottie-player.js";
import Test from "./shared/test.js";
import OneVideo from "./shared/one-video.js";

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
    oneVideo: {
      init: () => new OneVideo(),
      selectors: [".one-video__video"],
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
