function toggle_bg() {
    let bg = document.body.style.backgroundImage;
    if (bg === "" || bg === "none") {
        document.body.style.backgroundImage = "url('/assets/space.jpg')";
    } else {
        document.body.style.backgroundImage = "none";
    }
}
