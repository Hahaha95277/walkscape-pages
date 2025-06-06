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

  // 🔥 點擊整個卡片即可放大
  card.addEventListener("click", () => {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");
    const overlayCaption = document.getElementById("overlay-caption");

    overlayImg.src = scene.image;
    overlayCaption.textContent = scene.description;
    overlay.classList.remove("hidden");
  });

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(img);

  return card;
}

// 🔙 返回按鈕邏輯
document.getElementById("overlay-close").addEventListener("click", () => {
  document.getElementById("overlay").classList.add("hidden");
});

// 🔄 主邏輯啟動
fetchScenes().then((scenes) => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  scenes.forEach((scene) => {
    const card = createSceneCard(scene);
    root.appendChild(card);
  });
});
