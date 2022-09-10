var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector(".btn");
var resultText = document.querySelector(".output");
function handleEvent() {
  var init = Number(initialPrice.value);
  var quan = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);
  checkValue(init, quan, curr);
};
function checkValue(init, quan, curr) {
  var profit = (curr - init) * quan;
  var loss = (init - curr) * quan;
  var pp = (profit / init) * 100;
  var lp = (loss / init) * 100;
  if (profit > loss) {
    resultText.innerHTML = "TOO the moon<span>&#x1F911 &#x1F911</span>. Profit: " + profit + " Rs, profit in percentage: " + pp + "%";
  }
  else if (profit == loss) {
    resultText.innerHTML = "NO fuel no moon<span>&#x1F642&#x1F642</span>."
  }
  else {
    resultText.innerHTML = "Its a crash<span>&#x1F62D &#x1F62D</span>. loss: " + loss + " Rs, loss in percentage: " + lp + "%";
  }
}

checkBtn.addEventListener("click", handleEvent);

