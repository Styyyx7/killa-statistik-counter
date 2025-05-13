const counters = ["raids", "killaDa", "killaKill", "noKilla"];

function loadCounters() {
  counters.forEach((counter) => {
    const value = localStorage.getItem(counter) || 0;
    document.getElementById(counter).value = value;
  });

  const kills = localStorage.getItem("totalKills") || 0;
  document.getElementById("totalKills").value = kills;
  updateTotalKills();
  updateResult();
}

function changeCounter(id, delta) {
  let value = parseInt(localStorage.getItem(id) || "0", 10);
  value = Math.max(0, value + delta);
  localStorage.setItem(id, value);
  document.getElementById(id).value = value;
  updateResult();
}

function setCounter(id) {
  let value = parseInt(document.getElementById(id).value || "0", 10);
  value = Math.max(0, value);
  localStorage.setItem(id, value);
  updateResult();
}

function updateResult() {
  const killaDa = parseInt(localStorage.getItem("killaDa") || "0", 10);
  const killaKill = parseInt(localStorage.getItem("killaKill") || "0", 10);
  const raids = parseInt(localStorage.getItem("raids") || "0", 10);

  const totalSpawns = killaKill;
  const percentage = raids > 0 ? ((totalSpawns / raids) * 100).toFixed(2) : 0;

  document.getElementById(
    "resultText"
  ).innerText = `Killa war ${percentage}% der Raids da.`;
}

function updateTotalKills() {
  const value = parseInt(
    document.getElementById("totalKills").value || "0",
    10
  );
  localStorage.setItem("totalKills", value);
  const left = Math.max(0, 100 - value);
  document.getElementById("killsLeft").innerText = `Noch ${left} Kills nötig!`;
}

window.onload = loadCounters;
