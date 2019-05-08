window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log(sidenVises);

    // Video
    gvar video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");

    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");

    // Event listener for the play/pause button
    playButton.addEventListener("click", myPlay);

    function myPlay() {
        if (video.paused == true) {
            // Play the video
            video.play();

            // Update the button text to 'Pause'
            playButton.innerHTML = "Pause";
        } else {
            // Pause the video
            video.pause();

            // Update the button text to 'Play'
            playButton.innerHTML = "Play";
        }
    }


    // Event listener for the mute button
    muteButton.addEventListener("click", myMute);

    function myMute() {
        if (video.muted == false) {
            // Mute the video
            video.muted = true;

            // Update the button text
            muteButton.innerHTML = "Unmute";
        } else {
            // Unmute the video
            video.muted = false;

            // Update the button text
            muteButton.innerHTML = "Mute";
        }
    }

    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", fScreen);

    function fScreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        }
    }

    // Event listener for the seek bar
    seekBar.addEventListener("change", mySeek);

    function mySeek() {
        // Calculate the new time
        var time = video.duration * (seekBar.value / 100);

        // Update the video time
        video.currentTime = time;
    }

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", seekUp);

    function seekUp() {
        // Calculate the slider value
        var value = (100 / video.duration) * video.currentTime;

        // Update the slider value
        seekBar.value = value;
    }
    // Event listener for the volume bar
    volumeBar.addEventListener("change", VoLum);

    function VoLum() {
        // Update the video volume
        video.volume = volumeBar.value;
    }

}
