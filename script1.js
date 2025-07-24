document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('keydown', detectSpaceKey);
});

function detectSpaceKey(event) {
    if (event.keyCode == 13) { // 13 is the keycode for "Enter"
        showTime();
    }
}

function showTime() {
    var curtain = document.getElementById("curtain");
    curtain.classList.add("open");

    var scene = document.getElementById("scene");
    scene.classList.add("expand");

    var starter = document.getElementById("starter");
    starter.classList.add("fade-out");

    setTimeout(function () {
        starter.style.display = 'none';
    }, 2000);

    // Redirect to your main website after the animation completes
    setTimeout(function () {
        window.location.href = "/index.html"; // Path to your main website
    }, 6000); // Adjust the delay to match the animation duration
}