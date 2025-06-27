const quests = {
  helpVillager: {
    name: "Help the Villager",
    completed: false,
    description: "Find the missing sheep in the forest."
  }
};

function showNPCDialogue() {
  const dialog = document.getElementById("dialog-box");
  if (!quests.helpVillager.completed) {
    dialog.innerHTML = `Villager: "Please help me find my lost sheep in the forest!"<br>
      <button onclick="completeQuest('helpVillager')">Accept Quest</button>`;
    dialog.style.display = "block";
  } else {
    dialog.innerHTML = `Villager: "Thank you for finding my sheep!"`;
    dialog.style.display = "block";
    setTimeout(() => dialog.style.display = "none", 3000);
  }
}

function completeQuest(id) {
  if (quests[id]) {
    quests[id].completed = true;
    showDialog(`Quest Completed: ${quests[id].name}`);
    document.getElementById("dialog-box").style.display = "none";
  }
}

function createNPC() {
  const npc = document.createElement("div");
  npc.textContent = "👴";
  npc.title = "Talk to Villager";
  npc.style.cursor = "pointer";
  npc.style.fontSize = "40px";
  npc.onclick = showNPCDialogue;
  npc.style.marginTop = "10px";
  document.getElementById("game").appendChild(npc);
}

window.addEventListener("DOMContentLoaded", () => {
  createNPC();
});