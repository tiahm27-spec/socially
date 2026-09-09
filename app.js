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
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

photoInput.addEventListener("change", function () {
  const file = photoInput.files[0];

  if (!file) {
    return;
  }

  const image = document.createElement("img");
  function showPage(pageName) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageName).classList.add("active");
}


// Post button
const postButton = document.querySelector(".post-buttons button:last-child");
const postBox = document.querySelector("textarea");
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

let selectedPhoto = null;


// Choose a photo
photoInput.addEventListener("change", function () {
  const file = photoInput.files[0];

  if (!file) return;

  selectedPhoto = URL.createObjectURL(file);

  photoPreview.innerHTML = "";

  const image = document.createElement("img");
  image.src = selectedPhoto;

  photoPreview.appendChild(image);
});


// Create the post
postButton.addEventListener("click", function () {
  const text = postBox.value.trim();

  if (text === "" && !selectedPhoto) {
    alert("Write something or choose a photo first!");
    return;
  }

  const newPost = document.createElement("div");
  newPost.className = "card post";

  const user = document.createElement("div");
  user.className = "post-user";
  user.innerHTML = `
    <div class="avatar">M</div>
    <div>
      <strong>mari</strong>
      <p>@mari</p>
    </div>
  `;

  newPost.appendChild(user);

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
  image.src = URL.createObjectURL(file);

  photoPreview.innerHTML = "";
  photoPreview.appendChild(image);
});
