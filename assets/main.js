document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.className = "parallax-scene";

  const far = document.createElement("img");
  far.src = "./assets/glacier_far.jpg";
  far.className = "parallax-layer far";

  const mid = document.createElement("img");
  mid.src = "./assets/glacier_mid.jpg";
  mid.className = "parallax-layer mid";

  const front = document.createElement("img");
  front.src = "./assets/glacier_front.png";
  front.className = "parallax-layer front";

  container.appendChild(far);
  container.appendChild(mid);
  container.appendChild(front);

  document.body.appendChild(container);
});
