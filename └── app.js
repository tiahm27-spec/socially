function showPage(pageName) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageName).classList.add("active");
}


// Create a new post
const postButton = document.querySelector(".post-buttons button:last-child");
const postBox = document.querySelector("textarea");

postButton.addEventListener("click", function () {
  const text = postBox.value.trim();

  if (text === "") {
    alert("Write something first!");
    return;
  }

  const newPost = document.createElement("div");
  newPost.className = "card post";

  newPost.innerHTML = `
    <div class="post-user">
      <div class="avatar">M</div>
      <div>
        <strong>mari</strong>
        <p>@mari</p>
      </div>
    </div>

    <p>${text}</p>

    <div class="reactions">
      ❤️ Like
      💬 Comment
      ↗️ Share
    </div>
  `;

  document.getElementById("home").appendChild(newPost);

  postBox.value = "";
});
