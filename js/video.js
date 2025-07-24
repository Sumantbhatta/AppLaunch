document.addEventListener('DOMContentLoaded', function () {
    const mobileScreen = document.querySelector('.mobile-screen');
    const video = document.getElementById('video');

    // Play video when the mobile screen is clicked
    mobileScreen.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});