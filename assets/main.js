document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.className = "parallax-scene";

  // 建立各層圖像元素
  const far = document.createElement("img");
  far.src = "./assets/glacier_far.jpg";
  far.className = "parallax-layer far";

  const mid = document.createElement("img");
  mid.src = "./assets/glacier_mid.jpg";
  mid.className = "parallax-layer mid";

  const front = document.createElement("img");
  front.src = "./assets/glacier_front.png";
  front.className = "parallax-layer front";

  // 加入圖片到容器
  container.appendChild(far);
  container.appendChild(mid);
  container.appendChild(front);

  // 加入容器到 body
  document.body.innerHTML = ""; // 清空原本的內容（可選）
  document.body.appendChild(container);
});
