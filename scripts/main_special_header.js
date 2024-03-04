window.onload = function() {
    document.querySelector("#main_special_header").innerHTML = window.location.origin.replace(/^https?:\/\//, '').replace(/\//g, '');
    console.log(window.location.origin)
}