function showPage(pageName) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageName).classList.add("active");
}

const postButton = document.querySelector(".post-buttons button:last-child");
const postBox = document.querySelector("textarea");
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

let selectedPhoto = null;

photoInput.addEventListener("change", function () {
  const file = photoInput.files[0];

  if (!file) return;

  selectedPhoto = URL.createObjectURL(file);
  photoPreview.innerHTML = "";

  const image = document.createElement("img");
  image.src = selectedPhoto;
  image.className = "post-image";

  photoPreview.appendChild(image);
});

postButton.addEventListener("click", function () {
  const text = postBox.value.trim();

  if (text === "" && !selectedPhoto) {
    alert("Write something or choose a photo first!");
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
  `;

  if (text !== "") {
    const postText = document.createElement("p");
    postText.textContent = text;
    newPost.appendChild(postText);
  }

  if (selectedPhoto) {
    const image = document.createElement("img");
    image.src = selectedPhoto;
    image.className = "post-image";
    newPost.appendChild(image);
  }

  const reactions = document.createElement("div");
  reactions.className = "reactions";
  reactions.textContent = "❤️ Like    💬 Comment    ↗️ Share";

  newPost.appendChild(reactions);

  document.getElementById("home").appendChild(newPost);

  postBox.value = "";
  photoInput.value = "";
  photoPreview.innerHTML = "";
  selectedPhoto = null;
});
