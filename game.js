var health = 100;
var playerName = "";
var hits = 0;


function namePrompt() {
  playerName = prompt("What is your name?");
  update();
}

function slap() {
  health = (health - 1);
  hits = (hits + 1);
  update()
}
function punch() {
  health = (health - 5);
  hits = (hits + 1);
  update()
}
function kick() {
  health = (health - 10);
  hits = (hits + 1);
  update()
}

function update() {
  document.getElementById("health").innerText = " " + health;
  document.getElementById("name").innerText = playerName;
  document.getElementById("hits").innerText = hits;
}

update()