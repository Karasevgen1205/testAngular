import videojs from "video.js";

export default class OneVideo {
  constructor() {
    this.init();
  }

  init() {
    console.log("video-ok");
    const player = videojs("vid1", { controls: true, preload: "metadata" });
    player.src({ type: "video/mp4", src: "resources/video/JS_Udemy_1-3.mp4" });
    player.poster("resources/images/call.png");

    const start = document.querySelector(".start");
    start.addEventListener("click", () => {
      player.ready(function () {
        player.play();
        console.log(player.duration());
      });
    });

    const pause = document.querySelector(".pause");
    pause.addEventListener("click", () => {
      player.ready(function () {
        player.pause();
        console.log(player.currentTime());
      });
    });

    // let long = player.duration();
    // console.log(long);
    // , function () {
    //   this.addClass("video-ready");
    // }
    // );
    // player.options.autoplay = true;
    // videojs.options.controls = true;
  }
}
