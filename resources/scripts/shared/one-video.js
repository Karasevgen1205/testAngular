import videojs from "video.js";

export default class OneVideo {
  constructor() {
    this.init();
  }

  init() {
    const manyVideo = document.querySelectorAll(".one-video__video");
    manyVideo.forEach((oneVideo) => {
      const player = videojs(oneVideo, {
        controls: true,
        preload: "metadata",
        // userActions: {
        //  doubleClick: true, //полноэкранныйрежим по двойному склику
        // },
      });
      player.src({
        type: "video/mp4",
        src: "resources/video/less.mp4" + "#t=150",
      });
      // player.poster("resources/images/call.png");
      player.aspectRatio("16:9");

      // player.liveui(true);

      player.one("play", function () {
        this.currentTime(0);
        oneVideo.classList.remove("one-video__change-poster");
      });

      // player.on("play", function () {
      // oneVideo.classList.remove("one-video__change-poster");
      // console.log("play");
      // });

      // player.on("pause", function () {
      // oneVideo.classList.add("one-video__change-poster");
      // console.log("pause");
      // });

      // const l = document.querySelector(".vjs-play-control");
      // l.addEventListener("click", () => {
      // oneVideo.classList.toggle("one-video__change-poster");
      // });

      // oneVideo.addEventListener("click", (event) => {
      // let target = event.target;
      // if (target && target.classList.contains("vjs-big-play-button")) {
      //     const btns = document.querySelectorAll(".vjs-playing");
      //     btns.forEach((item, i) => {
      //       if (target == item) {
      //         oneVideo.classList.remove("one-video__change-poster");
      // console.log("PK");
      //       }
      //     });
      // }
      // });

      // const play = document.querySelector(".vjs-playing");
      // play.addEventListener("click", () => {
      //   oneVideo.classList.remove("one-video__change-poster");
      // });

      // const paused = document.querySelector(".vjs-paused");
      // paused.addEventListener("click", () => {
      //   oneVideo.classList.add("one-video__change-poster");
      // });
      // const start = document.querySelector(".start");
      // start.addEventListener("click", () => {
      //   player.ready(function () {
      //     player.play();
      //     oneVideo.classList.remove("one-video__change-poster");
      //     console.log(player.duration());
      //   });
      // });

      // const pause = document.querySelector(".pause");
      // pause.addEventListener("click", () => {
      //   player.ready(function () {
      //     player.pause();
      // oneVideo.classList.add("one-video__change-poster");
      //     console.log(player.currentTime());
      //   });
      // });

      const fullScreen = document.querySelector(".one-video__full-screen");
      fullScreen.addEventListener("click", () => {
        player.ready(() => {
          player.requestFullscreen();
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
    });
  }
}
