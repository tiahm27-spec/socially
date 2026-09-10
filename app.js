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

let selectedPhotos = [];

photoInput.addEventListener("change", function () {
  selectedPhotos = Array.from(photoInput.files);

  photoPreview.innerHTML = "";

  if (selectedPhotos.length === 0) return;

  const preview = document.createElement("div");
  preview.className = "photo-slider";

  selectedPhotos.forEach(file => {
    const image = document.createElement("img");
    image.src = URL.createObjectURL(file);
    preview.appendChild(image);
  });

  photoPreview.appendChild(preview);
});

postButton.addEventListener("click", function () {
  const text = postBox.value.trim();

  if (text === "" && selectedPhotos.length === 0) {
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

  if (selectedPhotos.length > 0) {
    const slider = document.createElement("div");
    slider.className = "photo-slider";

    selectedPhotos.forEach(file => {
      const image = document.createElement("img");
      image.src = URL.createObjectURL(file);
      slider.appendChild(image);
    });

    newPost.appendChild(slider);
  }

  const reactions = document.createElement("div");
  reactions.className = "reactions";
  reactions.textContent = "❤️ Like    💬 Comment    ↗️ Share";

  newPost.appendChild(reactions);

  document.getElementById("home").appendChild(newPost);

  postBox.value = "";
  photoInput.value = "";
  photoPreview.innerHTML = "";
  selectedPhotos = [];
});
function likePost(button) {
  const likes = button.nextElementSibling;

  let count = parseInt(likes.textContent);

  if (button.dataset.liked !== "true") {
    count++;
    button.dataset.liked = "true";
    button.textContent = "💜 Liked";
  } else {
    count--;
    button.dataset.liked = "false";
    button.textContent = "❤️ Like";
  }

  likes.textContent = count + " likes";
}
