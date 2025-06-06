
async function fetchScenes() {
  const response = await fetch("/walkscape-pages/data/scenes.json");
  const data = await response.json();
  return data;
}

function createSceneCard(scene) {
  const card = document.createElement("div");
  card.className = "scene-card";

  const title = document.createElement("h2");
  title.textContent = scene.name;

  const desc = document.createElement("p");
  desc.textContent = scene.description;

  const img = document.createElement("img");
  img.src = scene.image;
  img.alt = scene.name;

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(img);

  card.addEventListener("click", () => {
    document.getElementById("overlay-img").src = scene.image;
    document.getElementById("overlay-caption").textContent = scene.description;
    document.getElementById("overlay").classList.remove("hidden");
  });

  return card;
}

document.getElementById("overlay-close").addEventListener("click", () => {
  document.getElementById("overlay").classList.add("hidden");
});

fetchScenes().then((scenes) => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  scenes.forEach((scene) => {
    const card = createSceneCard(scene);
    root.appendChild(card);
  });
});
