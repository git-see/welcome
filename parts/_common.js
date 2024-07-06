// LORE AND LARDY - calculation
function leftover(a, b) {
  if (a < 0 || b < 0 || a > 100 || b > 100) {
    alert("Please enter valid values !");
    window.location.href = "/pages/chart.php";
  }
  return 100 - (a + b);
}

function calculer() {
  const partLore = parseInt(document.getElementById("partLore").value);
  const partLardy = parseInt(document.getElementById("partLardy").value);

  const result = leftover(partLore, partLardy);
  document.getElementById("result").innerText = result + " % leftovers !";

  if (result < 0 || result > 100) {
    alert("Please enter valid values !");
    window.location.href = "/pages/chart.php";
  }

// LORE AND LARDY - Chart
Chart.defaults.plugins.title.display = true;
Chart.defaults.plugins.title.text = "Lore and Lardy happy to share a cheese !";

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Lore", "Lardy", "Leftovers"],
    datasets: [
      {
        label: "Percentage of shares",
        data: [partLore, partLardy, result],
        borderColor: ["rgb(18, 114, 18)", "gold", "rgb(148, 156, 149)"],
        hoverBackgroundColor: [
          "rgb(18, 114, 18)",
          "gold",
          "rgb(148, 156, 149)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
}

/***** GAME *****/
function valid(button) {
  return button.innerHTML.length == 0;
}

function setSymbol(btn, symbol) {
  btn.innerHTML = symbol;
}

function winner(pawns, players, turn) {
  if (
    pawns[0].innerHTML == players[turn] &&
    pawns[1].innerHTML == players[turn] &&
    pawns[2].innerHTML == players[turn]
  ) {
    pawns[0].style.backgroundColor = "#D6B626";
    pawns[1].style.backgroundColor = "#D6B626";
    pawns[2].style.backgroundColor = "#D6B626";
    return true;
  }

  if (
    pawns[3].innerHTML == players[turn] &&
    pawns[4].innerHTML == players[turn] &&
    pawns[5].innerHTML == players[turn]
  ) {
    pawns[3].style.backgroundColor = "#D6B626";
    pawns[4].style.backgroundColor = "#D6B626";
    pawns[5].style.backgroundColor = "#D6B626";
    return true;
  }

  if (
    pawns[6].innerHTML == players[turn] &&
    pawns[7].innerHTML == players[turn] &&
    pawns[8].innerHTML == players[turn]
  ) {
    pawns[6].style.backgroundColor = "#D6B626";
    pawns[7].style.backgroundColor = "#D6B626";
    pawns[8].style.backgroundColor = "#D6B626";
    return true;
  }

  if (
    pawns[0].innerHTML == players[turn] &&
    pawns[3].innerHTML == players[turn] &&
    pawns[6].innerHTML == players[turn]
  ) {
    pawns[0].style.backgroundColor = "#D6B626";
    pawns[3].style.backgroundColor = "#D6B626";
    pawns[6].style.backgroundColor = "#D6B626";
    return true;
  }

  if (
    pawns[1].innerHTML == players[turn] &&
    pawns[4].innerHTML == players[turn] &&
    pawns[7].innerHTML == players[turn]
  ) {
    pawns[1].style.backgroundColor = "#D6B626";
    pawns[4].style.backgroundColor = "#D6B626";
    pawns[7].style.backgroundColor = "#D6B626";
    return true;
  }

  if (
    pawns[2].innerHTML == players[turn] &&
    pawns[5].innerHTML == players[turn] &&
    pawns[8].innerHTML == players[turn]
  ) {
    pawns[2].style.backgroundColor = "#D6B626";
    pawns[5].style.backgroundColor = "#D6B626";
    pawns[8].style.backgroundColor = "#D6B626";
    return true;
  }

  if (
    pawns[0].innerHTML == players[turn] &&
    pawns[4].innerHTML == players[turn] &&
    pawns[8].innerHTML == players[turn]
  ) {
    pawns[0].style.backgroundColor = "#D6B626";
    pawns[4].style.backgroundColor = "#D6B626";
    pawns[8].style.backgroundColor = "#D6B626";
    return true;
  }

  if (
    pawns[2].innerHTML == players[turn] &&
    pawns[4].innerHTML == players[turn] &&
    pawns[6].innerHTML == players[turn]
  ) {
    pawns[2].style.backgroundColor = "#D6B626";
    pawns[4].style.backgroundColor = "#D6B626";
    pawns[6].style.backgroundColor = "#D6B626";
    return true;
  }
}

function drawMatch(pawns) {
  for (let i = 0, len = pawns.length; i < len; i++) {
    if (pawns[i].innerHTML.length == 0) return false;
  }
  return true;
}

let ToShow = function (element) {
  let showing = element;
  function setText(message) {
    showing.innerHTML = message;
  }
  return { sendMessage: setText };
};

function game() {
  let pawns = document.querySelectorAll("#game button");
  let players = [
    '<img src="/parts/images/playerx.png" style="width:40px">',
    '<img src="/parts/images/playero.png" style="width:40px">',
  ];
  let turn = 0;
  let gameOver = false;
  let toShow = new ToShow(document.querySelector("#gameStatus"));
  toShow.sendMessage(
    "<p style='color:rgb(18, 114, 18);'>Let's Go !</p>PLAYER " + players[turn] + " it's your turn to play"
  );
  for (let i = 0, len = pawns.length; i < len; i++) {
    pawns[i].addEventListener("click", function () {
      if (gameOver) return;

      if (!valid(this)) {
        toShow.sendMessage(
          "Square occupied !<br/>Player " +
            players[turn] +
            " it’s still yours !"
        );
      } else {
        setSymbol(this, players[turn]);
        gameOver = winner(pawns, players, turn);

        if (gameOver) {
          toShow.sendMessage(
            "Player " +
              players[turn] +
              " won !<br/><a href='/pages/game.php'>Replay</a>"
          );
          return;
        }

        if (drawMatch(pawns)) {
          toShow.sendMessage(
            "Draw Match !<br/> <a href='/pages/game.php'>Replay</a>"
          );
          return;
        }
        turn++;
        turn = turn % 2;
        toShow.sendMessage("Player " + players[turn] + " it's up to you !");
      }
    });
  }
}

game();
