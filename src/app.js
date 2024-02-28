window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomSuit = suits[randomSuitIndex];

  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const randomNumberIndex = Math.floor(Math.random() * numbers.length);
  const randomNumber = numbers[randomNumberIndex];

  const selectNumberDiv = document.getElementById("number");
  const selectIcon1Div = document.getElementById("icon1");
  const selectIcon2Div = document.getElementById("icon2");
  selectNumberDiv.innerHTML = randomNumber;
  selectIcon1Div.innerHTML = randomSuit;
  selectIcon2Div.innerHTML = randomSuit;
};
