let btn = document.getElementById("play_stop");
let video = document.getElementById("bgvid");

function pnVideo() {
  if (video.getAttribute("value") == "playing") {
    video.setAttribute("value", "stopping");
    btn.innerText = "▶";
    video.pause();
  } else if (video.getAttribute("value") == "stopping") {
    video.setAttribute("value", "playing");
    btn.innerText = "■";
    video.play();
  }
}
