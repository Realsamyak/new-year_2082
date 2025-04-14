// Load wishes from localStorage or start fresh
let wishes = JSON.parse(localStorage.getItem("wishes2082")) || [];

function renderWishes() {
  const wall = document.getElementById("wishesWall");
  wall.innerHTML = "";

  wishes.forEach((wish, index) => {
    const card = document.createElement("div");
    card.className = "wish-card";
    card.innerHTML = `
      ${wish.text}
      <div class="like-btn" onclick="likeWish(${index})">❤️ ${wish.likes}</div>
    `;
    wall.appendChild(card);
  });
}

function addWish() {
  const input = document.getElementById("wishInput");
  const wishText = input.value.trim();

  if (wishText === "") {
    alert("Please type something before sending!");
    return;
  }

  wishes.push({ text: wishText, likes: 0 });
  localStorage.setItem("wishes2082", JSON.stringify(wishes));
  input.value = "";
  renderWishes();
}

function likeWish(index) {
  wishes[index].likes += 1;
  localStorage.setItem("wishes2082", JSON.stringify(wishes));
  renderWishes();
}

// Button click event
document.getElementById("sendBtn").addEventListener("click", addWish);

// Initial render
renderWishes();

// Music play function
function playMusic() {
  const audio = document.getElementById("birthdayMusic");
  audio.play();
}
