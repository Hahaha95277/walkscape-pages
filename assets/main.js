
document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/scenes.json")
    .then(res => res.json())
    .then(scenes => {
      const root = document.getElementById("root");
      scenes.forEach(scene => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h2>${scene.name}</h2>
          <p>${scene.description}</p>
          <img src="${scene.image}" style="max-width:100%; border-radius: 0.5rem;" />
        `;
        root.appendChild(div);
      });
    });
});
