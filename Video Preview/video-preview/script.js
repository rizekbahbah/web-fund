console.log("page loaded...");

function over(video1) {
    video1.play();
}

function out(video1) {
    video1.pause();
    video1.currentTime = 0
}
