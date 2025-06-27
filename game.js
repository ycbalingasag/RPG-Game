let pos = { x: 50, y: 50 };
let stats = { hp: 50, atk: 10, def: 5, equipped: "" };
let playerHP = 30;
let enemyHP = 30;

window.onload = () => {
  const saved = localStorage.getItem("rpg-save");
  if (saved) {
    pos = JSON.parse(saved);
    updatePosition();
  }
  updateStatsUI();
};

function move() {
  pos.x += Math.floor(Math.random() * 30 - 15);
  pos.y += Math.floor(Math.random() * 30 - 15);
  pos.x = Math.max(0, Math.min(260, pos.x));
  pos.y = Math.max(0, Math.min(160, pos.y));
  updatePosition();
  saveGame();
}
function updatePosition() {
  document.getElementById("character").style.left = pos.x + "px";
  document.getElementById("character").style.top = pos.y + "px";
}
function saveGame() {
  localStorage.setItem("rpg-save", JSON.stringify(pos));
}
function resetGame() {
  localStorage.removeItem("rpg-save");
  pos = { x: 50, y: 50 };
  updatePosition();
}
window.onbeforeunload = saveGame;

function showDialog(text) {
  const dialog = document.getElementById("dialog-box");
  dialog.innerText = text;
  dialog.style.display = "block";
  setTimeout(() => { dialog.style.display = "none"; }, 3000);
}

function updateStatsUI() {
  document.getElementById("stat-hp").textContent = stats.hp;
  document.getElementById("stat-atk").textContent = stats.atk;
  document.getElementById("stat-def").textContent = stats.def;
}
function useItem(item) {
  if (item === "potion") {
    stats.hp += 20;
    showDialog("You used a potion! HP restored by 20.");
    updateStatsUI();
  }
}
function equipItem(item) {
  if (item === "sword") {
    if (stats.equipped !== "sword") {
      stats.atk += 5;
      stats.equipped = "sword";
      showDialog("You equipped a sword! Attack +5.");
      updateStatsUI();
    } else {
      showDialog("Sword already equipped.");
    }
  }
}