function change_content(path) {
    var content_div = document.querySelector(".content")
    var container_div = document.querySelector(".content-container")

    fetch(path)
        .then(response => response.text())
        .then(html => {
            content_div.innerHTML = html;
        })
    .catch(error => console.error('Error fetching file:', error));

}

window.onload = function() {
    change_content('/static/home.html')
}