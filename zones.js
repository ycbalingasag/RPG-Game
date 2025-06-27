const zones = {
  forest: {
    name: "Enchanted Forest",
    background: "url('https://i.imgur.com/UjSAVmC.jpg')",
  },
  village: {
    name: "Old Village",
    background: "url('https://i.imgur.com/JN4Oe9n.jpg')",
  },
  cave: {
    name: "Dark Cave",
    background: "url('https://i.imgur.com/2coLUjo.jpg')",
  },
};

function createZoneButtons() {
  const zoneUI = document.createElement("div");
  zoneUI.id = "zones";
  zoneUI.innerHTML = `<h3>Zones</h3>`;

  for (const key in zones) {
    const btn = document.createElement("button");
    btn.textContent = zones[key].name;
    btn.onclick = () => switchZone(key);
    zoneUI.appendChild(btn);
  }

  document.body.insertBefore(zoneUI, document.getElementById("game"));
}

function switchZone(key) {
  const map = document.querySelector(".map");
  if (zones[key]) {
    map.style.backgroundImage = zones[key].background;
    showDialog(`You traveled to ${zones[key].name}`);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  createZoneButtons();
});