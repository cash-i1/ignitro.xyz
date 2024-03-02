function change_content(path) {
    var content_div = document.querySelector(".content")
    var container_div = document.querySelector(".content-container")

    fetch(path)
        .then(response => response.text())
        .then(html => {
            content_div.innerHTML = html;
            document.cookie = `last_page=${path};`;
            console.log(`cookie is now: ${document.cookie}`)
        })
        .catch(error => console.error('Error fetching file:', error));

}

window.onload = function () {
    var c = document.cookie.split(";")[0].split("=");
    if (c[0] == "last_page") {
        console.log(`changing contenet to ${c[1]}`)
        change_content(c[1])
    } else {
        change_content('/static/home.html')
    }
}