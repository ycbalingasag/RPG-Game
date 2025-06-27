const enemies = [
  { name: "Goblin", hp: 20, loot: "Gold Coin" },
  { name: "Slime", hp: 15, loot: "Green Goop" },
  { name: "Skeleton", hp: 25, loot: "Bone Fragment" }
];

let currentEnemy = null;

function startBattle() {
  currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  playerHP = stats.hp;
  enemyHP = currentEnemy.hp;

  document.getElementById("player-hp").textContent = playerHP;
  document.getElementById("enemy-hp").textContent = enemyHP;
  document.getElementById("battle-screen").style.display = "block";

  showDialog(`A wild ${currentEnemy.name} appears!`);
}

function playerAttack() {
  if (!currentEnemy) return;

  const damage = Math.floor(Math.random() * 5 + stats.atk);
  enemyHP -= damage;
  document.getElementById("enemy-hp").textContent = Math.max(enemyHP, 0);

  if (enemyHP <= 0) {
    showDialog(`You defeated the ${currentEnemy.name} and found a ${currentEnemy.loot}!`);
    addToInventory(currentEnemy.loot);
    document.getElementById("battle-screen").style.display = "none";
    currentEnemy = null;
    return;
  }

  setTimeout(enemyAttack, 1000);
}

function enemyAttack() {
  if (!currentEnemy) return;

  const damage = Math.max(1, Math.floor(Math.random() * 10 - stats.def));
  playerHP -= damage;
  document.getElementById("player-hp").textContent = Math.max(playerHP, 0);

  if (playerHP <= 0) {
    showDialog(`You were defeated by the ${currentEnemy.name}...`);
    document.getElementById("battle-screen").style.display = "none";
    currentEnemy = null;
  }
}

function addToInventory(itemName) {
  const inventoryDiv = document.getElementById("inventory");
  const existingItem = Array.from(inventoryDiv.getElementsByClassName("inventory-item")).find(el => el.textContent.includes(itemName));

  if (!existingItem) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "inventory-item";
    itemDiv.textContent = `${itemName}`;
    inventoryDiv.appendChild(itemDiv);
  } else {
    showDialog(`${itemName} is already in your inventory.`);
  }
}