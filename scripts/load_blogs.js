function add_blogs() {
  fetch("/assets/blogs.json", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      for (let post of data["posts"].reverse()) {
        let blogs_div = document.getElementById("blogs");

        let title_header = document.createElement("h2");
        title_header.innerHTML= post.title;

        let body_para = document.createElement("p");
        body_para.innerHTML= post.body;

        let post_div = document.createElement("div");
            let date_para = document.createElement("p");
              date_para.innerHTML = "postation date: " + post.date;
                date_para.style = "color: grey; font-size: 10px"
        post_div.appendChild(title_header);
        post_div.appendChild(date_para);

        post_div.appendChild(body_para);

        blogs_div.appendChild(post_div);
          break;
      }
    })
    .catch((error) => console.error("Error:", error));
}

document.addEventListener("DOMContentLoaded", (event) => {
  add_blogs();
});
