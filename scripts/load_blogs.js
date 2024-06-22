function add_blogs() {
  fetch("/assets/blogs.json", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      for (let post of data["posts"]) {
        let blogs_div = document.getElementById("blogs");

        let title_header = document.createElement("h2");
        title_header.textContent = post.title;

        let body_para = document.createElement("p");
        body_para.textContent = post.body;

        let post_div = document.createElement("div");

        post_div.appendChild(title_header);
        post_div.appendChild(body_para);

        blogs_div.appendChild(post_div);
      }
    })
    .catch((error) => console.error("Error:", error));
}

document.addEventListener("DOMContentLoaded", (event) => {
  add_blogs();
});
