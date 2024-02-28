document.addEventListener("DOMContentLoaded", function() {
    var divBottom = document.createElement('div');
    divBottom.className = 'div-bottom';
    
    fetch("/templates/bottom.html")
        .then(response => response.text())
        .then(data => {
            divBottom.innerHTML = data;

            document.body.appendChild(divBottom);
        })
        .catch(error => {
            console.error('Error fetching template:', error);
        });

}); // Thanks chatgpt!!!

